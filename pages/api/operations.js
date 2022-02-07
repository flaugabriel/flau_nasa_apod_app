
export const getImageapod = (date, setApodCurrentData) => fetch("https://api.nasa.gov/planetary/apod?api_key=TxeA0VRRbewElfuitAvcLFazb3RINEAMfpmsl4bL&date="+date, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  }
).then((res) => res.json()).then((json) => setApodCurrentData(json))