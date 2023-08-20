import React, { useEffect } from 'react'

const Loading = () => {

  useEffect(() => {
    let i = 1
    const getItem = document.querySelectorAll('.loading-animation')
    getItem.forEach((item) => item.style.display = 'none')

    const updateStep = () => {

      if (i < 5) {
        const getItem = document.querySelector(`.load-path-${i}`)
        getItem.style.display = 'block'
        i++
      } else if (i === 5) {
        getItem.forEach((item) => item.style.display = 'none')
        i = 1
      } else null
    }

    const intervalStep = setInterval(updateStep, 300)
    return () => {
      clearInterval(intervalStep)
    }
  }, []);


  return (

    <div className='container-loading'>
      <div className='icon-load'>
      <svg width="86" height="100" viewBox="0 0 86 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='loading-animation load-path-1' d="M70.8045 76.2573C70.2447 78.7857 71.3333 81.1653 73.236 81.5773C75.1386 81.9893 77.1361 80.2726 77.6959 77.7443C78.2558 75.2159 77.1671 72.8363 75.2645 72.4243C73.3618 72.0123 71.3643 73.7289 70.8045 76.2573ZM78.6143 81.5292C77.7302 83.4868 78.216 85.6068 79.6945 86.2588C81.1731 86.9107 83.0896 85.8531 83.968 83.8961C84.8465 81.9391 84.3721 79.8179 82.8935 79.1659C81.415 78.5139 79.4985 79.5716 78.62 81.5286L78.6143 81.5292ZM81.5941 92.8836C77.7707 85.1465 72.2549 83.6544 69.9025 83.8996C67.5502 84.1448 62.4605 86.7422 60.3147 95.1014C60.1672 95.6752 60.1378 96.2771 60.1996 96.8694L60.2091 96.9606C60.3622 98.4301 61.6767 99.4964 63.1462 99.3433C63.8012 99.275 64.4422 99.1276 65.0579 98.9022L69.9395 97.1268C70.7884 96.8195 71.6997 96.7245 72.5938 96.8501L77.7366 97.5808C78.3855 97.6744 79.0431 97.6865 79.6981 97.6182C81.1676 97.4651 82.234 96.1506 82.0808 94.6811L82.0713 94.5899C82.0096 93.9976 81.8567 93.4147 81.5941 92.8836ZM60.8074 88.2272C62.1197 87.2844 62.1579 85.1098 60.8891 83.3765C59.6203 81.6433 57.5326 81.003 56.2203 81.9458C54.9079 82.8887 54.8697 85.0633 56.1385 86.7965C57.4074 88.5298 59.495 89.1701 60.8074 88.2272ZM66.6175 82.2671C68.3943 81.4716 68.9688 78.9187 67.8997 76.5601C66.8305 74.2015 64.522 72.9336 62.7452 73.7291C60.9684 74.5245 60.3938 77.0775 61.463 79.4361C62.5321 81.7947 64.8407 83.0626 66.6175 82.2671Z" fill="#333333" />
        <path className='loading-animation load-path-2' d="M32.8048 52.6061C32.2051 55.1253 33.2561 57.5218 35.152 57.9638C37.0479 58.4058 39.0722 56.7209 39.6719 54.2017C40.2716 51.6825 39.2207 49.286 37.3248 48.844C35.4288 48.402 33.4045 50.0869 32.8048 52.6061ZM40.5304 58.0007C39.6155 59.9441 40.0677 62.0715 41.5358 62.7467C43.0039 63.422 44.9368 62.3947 45.8461 60.4518C46.7554 58.5089 46.3145 56.3805 44.8464 55.7052C43.3783 55.03 41.4454 56.0572 40.5361 58.0002L40.5304 58.0007ZM43.3305 69.4007C39.6298 61.6042 34.1382 60.0252 31.7823 60.2332C29.4263 60.4412 24.2963 62.9579 22.0188 71.2822C21.8623 71.8536 21.8234 72.455 21.8757 73.0482L21.8838 73.1395C22.0137 74.6112 23.3112 75.6982 24.783 75.5683C25.439 75.5104 26.0822 75.3731 26.7013 75.1575L31.6104 73.4593C32.4641 73.1655 33.3768 73.0849 34.2687 73.2246L39.3994 74.0364C40.0467 74.1403 40.704 74.1627 41.36 74.1048C42.8318 73.9749 43.9187 72.6774 43.7888 71.2056L43.7808 71.1144C43.7284 70.5211 43.5847 69.9359 43.3305 69.4007ZM22.6199 64.4167C23.947 63.4947 24.0195 61.3209 22.7782 59.5679C21.5369 57.8148 19.4596 57.1416 18.1326 58.0636C16.8055 58.9857 16.7329 61.1594 17.9742 62.9124C19.2156 64.6655 21.2928 65.3387 22.6199 64.4167ZM28.5234 58.549C30.3126 57.7817 30.9273 55.2382 29.8956 52.863C28.8638 50.4878 26.5756 49.1836 24.7864 49.9509C22.9973 50.7183 22.3825 53.2618 23.4143 55.637C24.446 58.0122 26.7343 59.3164 28.5234 58.549Z" fill="#333333" />
        <path className='loading-animation load-path-3' d="M63.3814 24.4143C63.4697 27.0024 65.1173 29.0354 67.0626 28.9599C69.0079 28.8845 70.5142 26.724 70.4259 24.1359C70.3376 21.5478 68.69 19.5148 66.7447 19.5902C64.7994 19.6657 63.2931 21.8262 63.3814 24.4143ZM72.2591 27.5723C71.8909 29.6885 72.89 31.6204 74.4845 31.8831C76.0789 32.1458 77.6711 30.6437 78.0338 28.5295C78.3966 26.4152 77.4082 24.4793 75.8138 24.2166C74.2194 23.9539 72.6272 25.456 72.2644 27.5703L72.2591 27.5723ZM77.9759 37.825C72.3441 31.2857 66.6304 31.2161 64.4135 32.0401C62.1965 32.864 57.9153 36.6485 57.9217 45.2787C57.9219 45.8712 58.0435 46.4614 58.251 47.0197L58.283 47.1056C58.7977 48.4905 60.3365 49.1954 61.7215 48.6806C62.3388 48.4512 62.9228 48.1486 63.4627 47.7768L67.7475 44.8402C68.493 44.331 69.3518 44.0118 70.2489 43.9105L75.4115 43.3357C76.0632 43.2646 76.7031 43.1123 77.3204 42.8828C78.7053 42.3681 79.4102 40.8293 78.8955 39.4444L78.8635 39.3585C78.656 38.8002 78.3627 38.2739 77.9759 37.825ZM56.6847 38.4989C57.7205 37.2586 57.2153 35.1431 55.5543 33.781C53.8934 32.4189 51.712 32.3194 50.6762 33.5597C49.6404 34.8 50.1456 36.9154 51.8066 38.2775C53.4675 39.6396 55.6489 39.7392 56.6847 38.4989ZM60.8251 31.2783C62.3475 30.0648 62.2673 27.4493 60.6438 25.4318C59.0203 23.4143 56.4685 22.7621 54.9462 23.9755C53.4239 25.1889 53.504 27.8044 55.1275 29.8219C56.751 31.8394 59.3028 32.4917 60.8251 31.2783Z" fill="#333333" />
        <path className='loading-animation load-path-4' d="M13.3952 12.1365C14.7364 14.3517 17.1671 15.321 18.8277 14.305C20.4883 13.289 20.7475 10.668 19.4063 8.45277C18.0651 6.23752 15.6345 5.26827 13.9738 6.28424C12.3132 7.30021 12.0541 9.92123 13.3952 12.1365ZM22.6844 10.556C23.3968 12.5824 25.2122 13.7802 26.7318 13.2306C28.2514 12.6811 28.9071 10.5927 28.191 8.57059C27.4748 6.54852 25.6668 5.342 24.1472 5.89155C22.6276 6.4411 21.9719 8.52951 22.6881 10.5516L22.6844 10.556ZM32.6807 16.7102C24.5723 13.7548 19.5526 16.4848 18.0205 18.2866C16.4885 20.0885 14.6012 25.4819 18.822 33.0095C19.1117 33.5264 19.5061 33.982 19.9598 34.3678L20.0296 34.4271C21.1552 35.3842 22.8423 35.2477 23.7993 34.1221C24.2259 33.6203 24.5877 33.071 24.8773 32.4829L27.1819 27.8276C27.5836 27.0191 28.1772 26.3211 28.9105 25.7945L33.1347 22.7714C33.6686 22.391 34.1525 21.9456 34.5791 21.4438C35.5362 20.3182 35.3996 18.6311 34.2741 17.6741L34.2042 17.6147C33.7505 17.2289 33.2374 16.913 32.6807 16.7102ZM14.4311 27.6976C14.7292 26.1094 13.2551 24.5102 11.1404 24.1329C9.02579 23.7556 7.0737 24.7342 6.77566 26.3224C6.47762 27.9106 7.95175 29.5098 10.0664 29.8871C12.181 30.2644 14.1331 29.2858 14.4311 27.6976ZM14.5173 19.3745C15.253 17.5722 13.9055 15.329 11.5034 14.3615C9.10131 13.394 6.55607 14.0712 5.82036 15.8736C5.08465 17.676 6.43214 19.9192 8.83423 20.8867C11.2363 21.8542 13.7816 21.1769 14.5173 19.3745Z" fill="#333333" />
      </svg>

      </div>
    </div>
  )
}

export default Loading