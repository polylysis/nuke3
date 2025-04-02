<script>
const _0x589d25=_0x1169;(function(_0x26d98b,_0x217b3e){const _0x2e9b18=_0x1169,_0x17fda3=_0x26d98b();while(!![]){try{const _0x540254=-parseInt(_0x2e9b18(0x1a7))/0x1*(-parseInt(_0x2e9b18(0x1aa))/0x2)+-parseInt(_0x2e9b18(0x1b7))/0x3*(parseInt(_0x2e9b18(0x1a8))/0x4)+parseInt(_0x2e9b18(0x1ae))/0x5+parseInt(_0x2e9b18(0x1b3))/0x6+parseInt(_0x2e9b18(0x1a5))/0x7+parseInt(_0x2e9b18(0x1a6))/0x8+parseInt(_0x2e9b18(0x1b2))/0x9*(-parseInt(_0x2e9b18(0x1ac))/0xa);if(_0x540254===_0x217b3e)break;else _0x17fda3['push'](_0x17fda3['shift']());}catch(_0x35992b){_0x17fda3['push'](_0x17fda3['shift']());}}}(_0x1211,0xa0e71));function _0x1169(_0x124e1f,_0x41ab4f){const _0x121148=_0x1211();return _0x1169=function(_0x11693d,_0x5cb5cb){_0x11693d=_0x11693d-0x1a2;let _0x106a04=_0x121148[_0x11693d];return _0x106a04;},_0x1169(_0x124e1f,_0x41ab4f);}function _0x1211(){const _0x26d758=['ae68722967274c3b31240dcccdcf4c27','18PpjqCN','6616152eilEsM','rain','temp','N/A','3555525XpDony','main','error\x20fetching\x20data','json','3253642ALTQjJ','7469408psUUUx','1GUqrgC','4dIscvr','&units=metric','1464228DYhPRe','description','10207570RNKEiH','loading...','3262290QvadKG','weather','humidity'];_0x1211=function(){return _0x26d758;};return _0x1211();}import{onMount}from'svelte';let weather='loading...',temp=_0x589d25(0x1ad),humidity=_0x589d25(0x1ad),pressure=_0x589d25(0x1ad),windSpeed='loading...',rainfall=_0x589d25(0x1ad),description=_0x589d25(0x1ad);const apiKey=_0x589d25(0x1b1),city='Singapore';onMount(async()=>{const _0x41cc73=_0x589d25;try{const _0x408ec9=await fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+_0x41cc73(0x1a9)),_0x53705f=await _0x408ec9[_0x41cc73(0x1a4)]();weather=_0x53705f[_0x41cc73(0x1af)][0x0][_0x41cc73(0x1a2)],description=_0x53705f['weather'][0x0][_0x41cc73(0x1ab)],temp=_0x53705f[_0x41cc73(0x1a2)][_0x41cc73(0x1b5)],humidity=_0x53705f['main'][_0x41cc73(0x1b0)],pressure=_0x53705f[_0x41cc73(0x1a2)]['pressure'],windSpeed=_0x53705f['wind']['speed'],rainfall=_0x53705f['rain']?_0x53705f[_0x41cc73(0x1b4)]['1h']:0x0;}catch(_0x262b5b){weather=_0x41cc73(0x1a3),temp=_0x41cc73(0x1b6),humidity='N/A',pressure=_0x41cc73(0x1b6),windSpeed=_0x41cc73(0x1b6),rainfall=_0x41cc73(0x1b6),description=_0x41cc73(0x1b6);}});
</script>

<head>
  <title>nuke3 - weather</title>
</head>

<main class="container">
  <h1>nuke3 weather</h1>
  <h2>about</h2>
  <p>displays detailed weather information for Singapore</p>

  <h2>weather</h2>

  <!-- Table to display weather data -->
  <table>
    <thead>
      <tr>
        <th>property</th>
        <th>value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>weather</strong></td>
        <td>{weather}</td>
      </tr>
      <tr>
        <td><strong>description</strong></td>
        <td>{description}</td>
      </tr>
      <tr>
        <td><strong>temperature</strong></td>
        <td>{temp}°C</td>
      </tr>
      <tr>
        <td><strong>humidity</strong></td>
        <td>{humidity}%</td>
      </tr>
      <tr>
        <td><strong>pressure</strong></td>
        <td>{pressure} hPa</td>
      </tr>
      <tr>
        <td><strong>wind speed</strong></td>
        <td>{windSpeed} m/s</td>
      </tr>
      <tr>
        <td><strong>rainfall (last 1 hour)</strong></td>
        <td>{rainfall} mm</td>
      </tr>
    </tbody>
  </table>
</main>
