// src/data/SeriesDetail.js : Contenido de cada serie para la página de detalles

const seriesDetail = [
    {
        id: "kaoru-hana-wa-rin-to-saku",   // clave única, coincide con :id en la ruta
        title: "Kaoru Hana wa Rin to Saku",
        desc: "Kaoru Hana wa Rin to Saku es una historia sobre la amistad y el romance que desafía las barreras sociales. La trama se desarrolla en dos escuelas secundarias vecinas: Chidori, una escuela para chicos de bajo rendimiento, y Kikyo, una prestigiosa escuela femenina. Rintaro, un estudiante de Chidori con apariencia ruda, conoce a Kaoruko, una estudiante de Kikyo, en la pastelería de su familia. A pesar de la animosidad entre sus escuelas, se hacen amigos y desarrollan sentimientos el uno por el otro, enfrentando los prejuicios y las expectativas sociales.",

        images: {
            bannerDesktop: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kaoru%20Hana%20wa%20Rin%20to%20Saku/assets/ouput4.webp",
            bannerMobile: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kaoru%20Hana%20wa%20Rin%20to%20Saku/assets/descarga.webp",
            titleImg: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kaoru%20Hana%20wa%20Rin%20to%20Saku/assets/img1.webp",
        },

        genres: ["Comedia romántica", "Escolar", "Recuentos de la vida", "Drama"],

        rating: "13+",

        seasons: [
            {
                id: "s1",
                title: "Temporada 1",
                poster: "https://…/s1-poster.webp",
                episodes: [
                    {
                        id: "e1",
                        title: "E-1 Rintaro y Kaoruko",
                        duration: "24m",
                        thumbnail: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kaoru%20Hana%20wa%20Rin%20to%20Saku/assets/Thumblain-Ep/thumbnail-01.webp",
                        synopsis: "Rintaro Tsumugi, un chico alto y con una apariencia intimidante que estudia en la preparatoria para chicos Chidori. Su aspecto a menudo lo hace ver como un delincuente, lo que genera miedo y desprecio, especialmente entre las chicas de la preparatoria de élite Kikyo, la escuela vecina.",
                        videoUrl: "https://cdn…/s1e1.mp4",
                        vttUrl: "https://cdn…/s1e1.vtt"
                    },

                    {
                        id: "e2",
                        title: "E-2 Ambos Somos",
                        duration: "24m",
                        thumbnail: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kaoru%20Hana%20wa%20Rin%20to%20Saku/assets/Thumblain-Ep/thumbnail-01.webp",
                        synopsis: "La relación entre Rintaro y Kaoruko comienza a desarrollarse más profundamente. Después de conocerse en la pastelería de la familia de Rintaro, Kaoruko empieza a visitarlo con más frecuencia. Sus interacciones se vuelven más cómodas y personales, y ambos se dan cuenta de que disfrutan de la compañía del otro.",
                        videoUrl: "https://cdn…/s1e1.mp4",
                        vttUrl: "https://cdn…/s1e1.vtt"
                    },

                    
                    
                ]
            },
            // … más temporadas
        ],

        // Opcional: datos para microinteracciones, trailers, extras, etc.
        // trailerUrl: "https://…/trailer.mp4",
        // recommendations: ["another-series-id", "xyz-id"],
    },

    {
        id: "kyoukai-no-kanata",   // clave única, coincide con :id en la ruta
        title: "Kyoukai no Kanata",
        desc: 'Kyoukai no Kanata sigue la historia de Akihito Kanbara, un estudiante de secundaria mitad espíritu y mitad humano, y Mirai Kuriyama, una guerrera del mundo espiritual con la habilidad de manipular la sangre. Sus vidas se entrelazan cuando Akihito salva a Mirai de intentar suicidarse, descubriendo así su naturaleza inmortal y su habilidad única. La serie explora su relación mientras enfrentan amenazas del mundo espiritual y luchan contra los "youmu", criaturas nacidas de emociones negativas.',

        images: {
            bannerDesktop: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kyoukai%20no%20Kanata/assets/output.webp",
            bannerMobile: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kyoukai%20no%20Kanata/assets/output2.webp",
            titleImg: "https://pruebas-assets-videostreaming.b-cdn.net/VideoStreaming/series/Kyoukai%20no%20Kanata/assets/img2.png",
        },

        genres: ["Fantasía Oscura", "Acción", "Romance", "Drama", "Comedia", "Recuentos de la Vida"],

        rating: "13+",

        seasons: [
            {
                id: "s1",
                title: "Temporada 1",
                poster: "https://…/s1-poster.webp",
                episodes: [
                    {
                        id: "e1",
                        title: "Capítulo 1",
                        duration: "24m",
                        thumbnail: "https://…/s1e1-thumb.webp",
                        description: "Introducción de personajes y contexto",
                        videoUrl: "https://cdn…/s1e1.mp4",
                        vttUrl: "https://cdn…/s1e1.vtt"
                    },
                    // … más capítulos
                ]
            },
            // … más temporadas
        ],

        // Opcional: datos para microinteracciones, trailers, extras, etc.
        // trailerUrl: "https://…/trailer.mp4",
        // recommendations: ["another-series-id", "xyz-id"],
    },
];

export default seriesDetail;