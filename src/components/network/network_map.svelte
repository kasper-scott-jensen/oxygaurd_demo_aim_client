<script>
    // Import necessary functions and components
    import { onDestroy, onMount } from 'svelte'
    import mapboxgl from 'mapbox-gl'
    import { partners } from '../../stores/crm'

    const env = import.meta.env

    // Initialize the map variable
    let map

    // Set Mapbox access token
    mapboxgl.accessToken = env.VITE_MAPBOX_API_KEY

    // onMount lifecycle hook to initialize the map
    onMount(() => {
        // Create and configure the Mapbox map
        map = new mapboxgl.Map({
            container: 'map',
            projection: 'globe',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [12.4765718, 55.7410755],
            zoom: 3,
        })

        // Add fullscreen control to the map
        map.addControl(new mapboxgl.FullscreenControl())

        // Add markers and popups for each partner location
        $partners.forEach((location) => {
            const popupContent = `
                <div class="flex flex-col w-full p-4 text-center justify-center items-center">
                    <h3 class="text-xl font-bold text-primary-700 pb-4">${location.company}</h3>
                    <img src=${location.img_url} alt="logo" class="max-w-28 max-h-24" />
                    <div class="flex flex-col w-full text-start font-medium text-sm pt-4">
                        <p class="py-2 flex items-center justify-start text-gray-900 mt-2 break-all">
                            <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                            </span>
                            ${location.address}, ${location.city}, ${location.country}
                        </p>
                        <p class="py-2 flex items-center justify-start text-gray-700 break-all">
                            <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </span>
                            ${location.email}
                        </p>
                        <p class="py-2 flex items-center justify-start text-gray-700 break-all">
                            <span class="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            ${location.country_code}${location.phone}
                        </p>
                        <p class="py-2 flex items-center justify-start text-gray-700 break-all">
                            <span class="me-3 [&>svg]:h-6 [&>svg]:w-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                                </svg>
                            </span>
                            ${location.website}
                        </p>
                    </div>
                </div>`
            // Add markers to the map with popups for each partner location
            new mapboxgl.Marker({ color: '#00ADEE' })
                .setLngLat([location.longitude, location.latitude])
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent),
                )
                .addTo(map)
        })
    })

    // onDestroy lifecycle hook to clean up the map instance
    onDestroy(() => {
        if (map) {
            map.remove()
        }
    })
</script>

<!-- Map container div -->
<div class="flex w-full justify-center h-full">
    <div class="max-w-screen-2xl" id="map"></div>
</div>

<!-- CSS for styling the map container -->
<style>
    #map {
        width: 100%;
        height: 100%;
        min-height: 400px;
        border-radius: 10px;
    }
</style>
