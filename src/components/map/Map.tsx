import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { Viewport } from "solid-map-gl";
import "./Map.css";
import { createSignal } from "solid-js";

export default function Map() {

  const [viewport, setViewport] = createSignal({
    center: [0, 52],
    zoom: 11,
  } as Viewport);

  return (
    <MapGL
      class="map-container"
      options={{
        style: "mb:light"
      }}
      viewport={viewport()}
      onViewportChange={(evt: Viewport) => setViewport(evt)}
    >

    </MapGL>
  );
}

