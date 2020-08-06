import { Injectable } from '@angular/core';
import { Map, NavigationControl, LngLatLike } from 'mapbox-gl';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MapService {
    map: Map;
    style = 'mapbox://styles/baffioso/cim2bxsrn00s2bjlwdwk5l6e8';
    center = [12.57938, 55.6667];
    zoom = 16;

    createMap() {
        this.map = new Map({
            container: 'map',
            style: this.style,
            center: this.center as LngLatLike,
            zoom: this.zoom,
            accessToken: environment.mapboxToken,
            maxZoom: 25
        });

        this.map.addControl(new NavigationControl({ showCompass: true }), 'bottom-right');
        this.map.on('load', () => {
            // this.addLayer('njals-3');
        });
    }

    addLayer(id: string) {
        this.map.addSource(id, {
            type: 'raster',
            tiles: [`https://tiles.baffioso.dk/data/${id}/{z}/{x}/{y}.png`]
        });

        this.map.addLayer({
            id,
            source: id,
            type: 'raster',
            paint: {
            'raster-opacity': 0.75
            }
        });
    }

    removeLayer(id: string) {
        if (this.map.getLayer(id)) {
            this.map.removeLayer(id);
            this.map.removeSource(id);
        }
    }

}
