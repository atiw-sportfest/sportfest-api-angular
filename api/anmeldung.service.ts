/**
 * Sportfest Backend
 * Sportfest backend
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { Anmeldung } from '../model/anmeldung';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AnmeldungService {

    protected basePath = 'https://sportfest.atiw.de/backend';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (let consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Anmeldebogen für eine Klasse herunterladen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public anmeldebogenKidGet(kid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public anmeldebogenKidGet(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public anmeldebogenKidGet(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public anmeldebogenKidGet(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling anmeldebogenKidGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/vnd.ms-excel'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/anmeldebogen/${encodeURIComponent(String(kid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldebogen für eine Klasse hochladen
     * 
     * @param file Anmeldung als Excel-Datei
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public anmeldebogenPost(file: Blob, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public anmeldebogenPost(file: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public anmeldebogenPost(file: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public anmeldebogenPost(file: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling anmeldebogenPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'multipart/form-data'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void; };
        let useForm = false;
        let convertFormParamsToString = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        // see https://stackoverflow.com/questions/4007969/application-x-www-form-urlencoded-or-multipart-form-data
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }

        if (file !== undefined) {
            formParams = formParams.append('file', <any>file) || formParams;
        }

        return this.httpClient.post<any>(`${this.basePath}/anmeldebogen`,
            convertFormParamsToString ? formParams.toString() : formParams,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldung löschen
     * 
     * @param aid Anmeldungs-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public anmeldungAidDelete(aid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public anmeldungAidDelete(aid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public anmeldungAidDelete(aid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public anmeldungAidDelete(aid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (aid === null || aid === undefined) {
            throw new Error('Required parameter aid was null or undefined when calling anmeldungAidDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/anmeldung/${encodeURIComponent(String(aid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldung anzeigen
     * 
     * @param aid Anmeldungs-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public anmeldungAidGet(aid: number, observe?: 'body', reportProgress?: boolean): Observable<Anmeldung>;
    public anmeldungAidGet(aid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Anmeldung>>;
    public anmeldungAidGet(aid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Anmeldung>>;
    public anmeldungAidGet(aid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (aid === null || aid === undefined) {
            throw new Error('Required parameter aid was null or undefined when calling anmeldungAidGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Anmeldung>(`${this.basePath}/anmeldung/${encodeURIComponent(String(aid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldungen anzeigen
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public anmeldungGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Anmeldung>>;
    public anmeldungGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Anmeldung>>>;
    public anmeldungGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Anmeldung>>>;
    public anmeldungGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Anmeldung>>(`${this.basePath}/anmeldung`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldungen einer Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidAnmeldungenGet(did: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Anmeldung>>;
    public disziplinDidAnmeldungenGet(did: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Anmeldung>>>;
    public disziplinDidAnmeldungenGet(did: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Anmeldung>>>;
    public disziplinDidAnmeldungenGet(did: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidAnmeldungenGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Anmeldung>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/anmeldungen`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldungen einer Klasse anzuzeigen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidAnmeldungenGet(kid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Anmeldung>>;
    public klasseKidAnmeldungenGet(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Anmeldung>>>;
    public klasseKidAnmeldungenGet(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Anmeldung>>>;
    public klasseKidAnmeldungenGet(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidAnmeldungenGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Anmeldung>>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}/anmeldungen`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Anmeldungen eines Schuelers anzuzeigen
     * 
     * @param sid Schueler-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerSidAnmeldungenGet(sid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Anmeldung>>;
    public schuelerSidAnmeldungenGet(sid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Anmeldung>>>;
    public schuelerSidAnmeldungenGet(sid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Anmeldung>>>;
    public schuelerSidAnmeldungenGet(sid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sid === null || sid === undefined) {
            throw new Error('Required parameter sid was null or undefined when calling schuelerSidAnmeldungenGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        return this.httpClient.get<Array<Anmeldung>>(`${this.basePath}/schueler/${encodeURIComponent(String(sid))}/anmeldungen`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
