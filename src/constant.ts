export const const_site_url = 'https://deptno.github.io/map-subway-storage'
export const const_site_title = '지하철 물품보관소(해피박스) 위치'
export const const_site_description = `${const_site_title} 찾기, 조회 서비스`
export const seo = {
  title      : const_site_title,
  description: const_site_description,
  canonical  : const_site_url,
  openGraph  : {
    url        : const_site_url,
    title      : const_site_title,
    description: const_site_description,
    images     : [
      {
        url   : [const_site_url, 'screenshot.png'].join('/'),
        width : 748,
        height: 1620,
        alt   : const_site_url,
      },
    ],
    site_name  : const_site_title,
  }
}