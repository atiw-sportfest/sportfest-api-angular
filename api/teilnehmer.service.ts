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
import { Klasse } from '../model/klasse';
import { KlasseMitPunkten } from '../model/klasseMitPunkten';
import { Schueler } from '../model/schueler';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TeilnehmerService {

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
     * Klassen auflisten
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Klasse>>;
    public klasseGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Klasse>>>;
    public klasseGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Klasse>>>;
    public klasseGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Klasse>>(`${this.basePath}/klasse`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Klasse löschen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidDelete(kid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public klasseKidDelete(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public klasseKidDelete(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public klasseKidDelete(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidDelete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse einer Klasse fuer eine Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidErgebnisseDidGet(did: number, kid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public klasseKidErgebnisseDidGet(did: number, kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public klasseKidErgebnisseDidGet(did: number, kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public klasseKidErgebnisseDidGet(did: number, kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling klasseKidErgebnisseDidGet.');
        }
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidErgebnisseDidGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}/ergebnisse/${encodeURIComponent(String(did))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse einer Klasse anzuzeigen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidErgebnisseGet(kid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public klasseKidErgebnisseGet(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public klasseKidErgebnisseGet(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public klasseKidErgebnisseGet(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidErgebnisseGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}/ergebnisse`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Klasse abrufen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidGet(kid: number, observe?: 'body', reportProgress?: boolean): Observable<Klasse>;
    public klasseKidGet(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Klasse>>;
    public klasseKidGet(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Klasse>>;
    public klasseKidGet(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidGet.');
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

        return this.httpClient.get<Klasse>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Schueler einer Klasse anzuzeigen
     * 
     * @param kid Klassen-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseKidSchuelerGet(kid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Schueler>>;
    public klasseKidSchuelerGet(kid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Schueler>>>;
    public klasseKidSchuelerGet(kid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Schueler>>>;
    public klasseKidSchuelerGet(kid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (kid === null || kid === undefined) {
            throw new Error('Required parameter kid was null or undefined when calling klasseKidSchuelerGet.');
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

        return this.httpClient.get<Array<Schueler>>(`${this.basePath}/klasse/${encodeURIComponent(String(kid))}/schueler`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Alle Klassen mit Punkten auflisten
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public klasseSummaryGet(observe?: 'body', reportProgress?: boolean): Observable<Array<KlasseMitPunkten>>;
    public klasseSummaryGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<KlasseMitPunkten>>>;
    public klasseSummaryGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<KlasseMitPunkten>>>;
    public klasseSummaryGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<KlasseMitPunkten>>(`${this.basePath}/klasse/summary`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Schueler auflisten
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerGet(observe?: 'body', reportProgress?: boolean): Observable<Array<Schueler>>;
    public schuelerGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Schueler>>>;
    public schuelerGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Schueler>>>;
    public schuelerGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get<Array<Schueler>>(`${this.basePath}/schueler`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Schüler importieren
     * Schüler aus einer CSV-Datei importieren. Die Datei muss folgende Spalten in der angegebenen Reihenfolge enthalten: Nachname, Vorname, Klasse, Geschlecht.
     * @param csv CSV-Datei
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerPut(csv: Blob, observe?: 'body', reportProgress?: boolean): Observable<Array<Schueler>>;
    public schuelerPut(csv: Blob, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Schueler>>>;
    public schuelerPut(csv: Blob, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Schueler>>>;
    public schuelerPut(csv: Blob, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (csv === null || csv === undefined) {
            throw new Error('Required parameter csv was null or undefined when calling schuelerPut.');
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

        if (csv !== undefined) {
            formParams = formParams.append('csv', <any>csv) || formParams;
        }

        return this.httpClient.put<Array<Schueler>>(`${this.basePath}/schueler`,
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
     * Schueler löschen
     * 
     * @param sid Schueler-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerSidDelete(sid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public schuelerSidDelete(sid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public schuelerSidDelete(sid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public schuelerSidDelete(sid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sid === null || sid === undefined) {
            throw new Error('Required parameter sid was null or undefined when calling schuelerSidDelete.');
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

        return this.httpClient.delete<any>(`${this.basePath}/schueler/${encodeURIComponent(String(sid))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse eines Schuelers fuer eine Disziplin anzeigen
     * 
     * @param did Disziplin-ID
     * @param sid Schueler-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerSidErgebnisseDidGet(did: number, sid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public schuelerSidErgebnisseDidGet(did: number, sid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public schuelerSidErgebnisseDidGet(did: number, sid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public schuelerSidErgebnisseDidGet(did: number, sid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (did === null || did === undefined) {
            throw new Error('Required parameter did was null or undefined when calling schuelerSidErgebnisseDidGet.');
        }
        if (sid === null || sid === undefined) {
            throw new Error('Required parameter sid was null or undefined when calling schuelerSidErgebnisseDidGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/schueler/${encodeURIComponent(String(sid))}/ergebnisse/${encodeURIComponent(String(did))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Ergebnisse eines Schuelers anzuzeigen
     * 
     * @param sid Schueler-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerSidErgebnisseGet(sid: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Ergebnis>>;
    public schuelerSidErgebnisseGet(sid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Ergebnis>>>;
    public schuelerSidErgebnisseGet(sid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Ergebnis>>>;
    public schuelerSidErgebnisseGet(sid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sid === null || sid === undefined) {
            throw new Error('Required parameter sid was null or undefined when calling schuelerSidErgebnisseGet.');
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

        return this.httpClient.get<Array<Ergebnis>>(`${this.basePath}/schueler/${encodeURIComponent(String(sid))}/ergebnisse`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Schueler abrufen
     * 
     * @param sid Schueler-ID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public schuelerSidGet(sid: number, observe?: 'body', reportProgress?: boolean): Observable<Schueler>;
    public schuelerSidGet(sid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Schueler>>;
    public schuelerSidGet(sid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Schueler>>;
    public schuelerSidGet(sid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (sid === null || sid === undefined) {
            throw new Error('Required parameter sid was null or undefined when calling schuelerSidGet.');
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

        return this.httpClient.get<Schueler>(`${this.basePath}/schueler/${encodeURIComponent(String(sid))}/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
