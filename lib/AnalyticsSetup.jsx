"use client";

import React, { useEffect } from 'react';

// NOTA: Se usan tags <script> simples en lugar de 'next/script' 
// para asegurar la compilación en este entorno.

const GA_MEASUREMENT_ID = 'G-7WB3THZ7ED'; 

/**
 * Componente para configurar Google Analytics 4 (GA4) en la aplicación.
 * Este componente debe ser cargado en el layout principal para que el seguimiento 
 * se active en todas las páginas.
 */
export default function AnalyticsSetup() {
    
    // Solo un recordatorio de que se debe configurar el ID.
    useEffect(() => {
        if (GA_MEASUREMENT_ID === 'G-7WB3THZ7ED') {
            console.warn("ADVERTENCIA GA4: Reemplaza ID GA4.");
        }
        // En una aplicación real de Next.js, aquí se incluiría lógica adicional 
        // para el seguimiento de rutas (path changes) si no se usa el componente Script oficial.
    }, []);

    return (
        <>
            {/* 1. Carga asíncrona de la librería principal de Google Analytics (gtag.js) */}
            {/* Es fundamental que este script se cargue antes que el resto del contenido para un mejor tracking. */}
            <script
                key="ga-loader"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            
            {/* 2. Script de inicialización y configuración de la propiedad GA4 */}
            <script
                key="ga-config"
                dangerouslySetInnerHTML={{
                    __html: `
                        // Define la capa de datos global
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        
                        // Inicializa la configuración de tu propiedad GA4 (registra la primera PageView)
                        gtag('config', '${GA_MEASUREMENT_ID}');
                    `,
                }}
            />
        </>
    );
}
