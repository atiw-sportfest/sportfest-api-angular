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

import { Ergebnis } from '../model/ergebnis';
import { Leistung } from '../model/leistung';
import { Versus } from '../model/versus';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ErgebnisService {

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
     * Ergebnisse einer Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidErgebnisseGet(did: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public disziplinDidErgebnisseGet(did: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public disziplinDidErgebnisseGet(did: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public disziplinDidErgebnisseGet(did: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidErgebnisseGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/ergebnisse`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse für eine Disziplin anlegen
     * Für die anzulegenden Ergebnisse wird die Disziplin-ID mit der im Pfad angegenen ID überschrieben.
     * @param did Disziplin-ID
     * @param ergebnisse Ergebnisse
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidErgebnissePost(did: number, ergebnisse?: Array<Ergebnis>, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public disziplinDidErgebnissePost(did: number, ergebnisse?: Array<Ergebnis>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public disziplinDidErgebnissePost(did: number, ergebnisse?: Array<Ergebnis>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public disziplinDidErgebnissePost(did: number, ergebnisse?: Array<Ergebnis>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidErgebnissePost.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Array<Ergebnis>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/ergebnisse`,
            ergebnisse,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse für einen Teilnehmer einer Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param tid Schueler- oder Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidErgebnisseTidGet(did: number, tid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public disziplinDidErgebnisseTidGet(did: number, tid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public disziplinDidErgebnisseTidGet(did: number, tid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public disziplinDidErgebnisseTidGet(did: number, tid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidErgebnisseTidGet.');
        }
        if (tid === null || tid === undefined) {
            throw new Error('Required parameter tid was null or undefined when calling disziplinDidErgebnisseTidGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/ergebnisse/${encodeURIComponent(String(tid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Leistungen einer Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidLeistungenGet(did: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Leistung>>;
    public disziplinDidLeistungenGet(did: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Leistung>>>;
    public disziplinDidLeistungenGet(did: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Leistung>>>;
    public disziplinDidLeistungenGet(did: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidLeistungenGet.');
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

        return this.httpClient.get<Array<Leistung>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/leistungen`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Leistungen fuer eine Disziplin anlegen
     * 
     * @param did Disziplin-ID
     * @param tid Schueler- oder Klassen-ID
     * @param leistungen Leistungen
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidLeistungenTidPost(did: number, tid: number, leistungen: Array<Leistung>, observe?: 'body', reportProgress?: boolean): Observable<Array<Leistung>>;
    public disziplinDidLeistungenTidPost(did: number, tid: number, leistungen: Array<Leistung>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Leistung>>>;
    public disziplinDidLeistungenTidPost(did: number, tid: number, leistungen: Array<Leistung>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Leistung>>>;
    public disziplinDidLeistungenTidPost(did: number, tid: number, leistungen: Array<Leistung>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidLeistungenTidPost.');
        }
        if (tid === null || tid === undefined) {
            throw new Error('Required parameter tid was null or undefined when calling disziplinDidLeistungenTidPost.');
        }
        if (leistungen === null || leistungen === undefined) {
            throw new Error('Required parameter leistungen was null or undefined when calling disziplinDidLeistungenTidPost.');
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
        let httpContentTypeSelected:string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }

        return this.httpClient.post<Array<Leistung>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/leistungen/${encodeURIComponent(String(tid))}`,
            leistungen,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Versus einer Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public disziplinDidVersusGet(did: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Versus>>;
    public disziplinDidVersusGet(did: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Versus>>>;
    public disziplinDidVersusGet(did: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Versus>>>;
    public disziplinDidVersusGet(did: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling disziplinDidVersusGet.');
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

        return this.httpClient.get<Array<Versus>>(`${this.basePath}/disziplin/${encodeURIComponent(String(did))}/versus`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnis löschen
     * 
     * @param eid Ergebnis-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ergebnisEidDelete(eid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public ergebnisEidDelete(eid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public ergebnisEidDelete(eid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public ergebnisEidDelete(eid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling ergebnisEidDelete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/ergebnis/${encodeURIComponent(String(eid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnis anzeigen
     * 
     * @param eid Ergebnis-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ergebnisEidGet(eid: number, observe?: 'body', reportProgress?: boolean): Observable<Ergebnis>;
    public ergebnisEidGet(eid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Ergebnis>>;
    public ergebnisEidGet(eid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Ergebnis>>;
    public ergebnisEidGet(eid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (eid === null || eid === undefined) {
            throw new Error('Required parameter eid was null or undefined when calling ergebnisEidGet.');
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

        return this.httpClient.get<Ergebnis>(`${this.basePath}/ergebnis/${encodeURIComponent(String(eid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse abrufen
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ergebnisGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public ergebnisGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public ergebnisGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public ergebnisGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/ergebnis`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse eines Versus anzeigen
     * 
     * @param vid Versus-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public ergebnisVersusVidGet(vid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public ergebnisVersusVidGet(vid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public ergebnisVersusVidGet(vid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public ergebnisVersusVidGet(vid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (vid === null || vid === undefined) {
            throw new Error('Required parameter vid was null or undefined when calling ergebnisVersusVidGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/ergebnis/versus/${encodeURIComponent(String(vid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Versus löschen
     * Löscht den Versus, inklusive seiner Ergebnisse.
     * @param vid Versus-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public versusVidDelete(vid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public versusVidDelete(vid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public versusVidDelete(vid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public versusVidDelete(vid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (vid === null || vid === undefined) {
            throw new Error('Required parameter vid was null or undefined when calling versusVidDelete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/versus/${encodeURIComponent(String(vid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
