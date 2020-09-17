export const GA_TRACKING_ID = 'UA-142141767-1'

export const pageview = (url) => {
    window.gtag && window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}
