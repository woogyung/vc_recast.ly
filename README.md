# Recast.ly
디자이너 친구가 비디오 플레이어 app의 기본적이 스타일링과 모양을 친절히도 만들어 주었습니다.
이 app은 필요한 스타일 및 React component가 있지만 가짜 내용물들만 rendering하고 있습니다.
여러분의 업무는 YouTube Data API의 데이터로 연결하여 이 app을 완성 시키는 것입니다.
Bare Minimum Requirements를 완료하면 YouTube의 모든 동영상을 실시간 검색, 표시 및 재생할 수 있습니다.

## High Level Goals of this Sprint

  * React로 app을 만들어 client-side library의 중요성을 이해하고 경험하세요.

  * 웹 app을 component로 생각하는 방법 배우기

  * 인기있는 ES6 기능을 익히고 실습하기

  * REST API에 조금더 많이 노출되고 interact하기(이번 같은 경우, [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en)와 interact하기)

  * 다양한 파일에서 많은 module을 포함하는 큰 codebase를 경험하기.

## Component 기준으로 생각하기

React로 구축 된 front-end app은 React component (일반적으로 그냥 component라고 함)로만 구성됩니다.
component에는 다른 component가 nesting 될수 있지만 각 component는 한가지 일만 수행해야 합니다.
한가지 일만 수행하는 것은 function, object, 심지어는 program 자체를 만들때 best practice로 여겨 지는 것이며 React가 이것을 모방 한 것입니다.
어떤 component를 만들지 구성하는 방법을 결정하는 것은 다소 임의적입니다.
경험과 실수를 통해보다 올바른 형식의 의견을 개발하게되며 이러한 종류의 결정을 내리는 것이 더 쉬워 질 것입니다.

작동은 하지만 app에 필요한 필수 비 상호 작용 버전의 commponent가 이미 구축되었습니다.
각 component는 `src/components/` folder 내부의 파일들에 있습니다.
이 sprint가 진행되는 동안 component가 서로 다른 component끼리 interact하는것은 물론 YouTube Data API와 interact하도록 refactor할 것입니다.
다음은 component들이 어떻게 정리 되었는지에 대한 설명 입니다.

  * `App` - 전체 app의 최상위 컨테이너입니다. 이것은 DOM에 rendering될 component입니다.

  * `Nav` - 상단 네비게이션 바를 위한 컨테이너 component

  * `Search` - 검색 input 필드에 대한 정보를 알고 전달합니다.

  * `VideoPlayer` - 한개 비디오 재생 및 정보 표시.

  * `VideoList` - 동영상 목록 항목 component 채우기를 담당하는 컨테이너 component .

  * `VideoListEntry` - 하나의 비디오에 대한 축소판보기를 표시하는 구성 요소입니다. 이 비디오의 제목을 클릭하면 해당 비디오가 `VideoPlayer` component에서 재생됩니다


## Project set up

### npm

이 sprint는 [npm](https://www.npmjs.com/)을 사용하여 dependency들을 관리합니다.
npm은 Node를 설치하면 같이 제공되며 개발자가 코드를 쉽게 공유하고 재사용 할 수있게 해주는 또 다른 JavaScript 패키지 관리자입니다.
npm은 Node 생태계에서 시작되었지만 모든 유형의 JavaScript 코드를 공유하기위한 가장 많이 사용하는 package manager입니다.

이 sprint에 dependency들 install하기:

  - [ ] 만약 Node.js가 설치 않되있다면 [Install Node.js](https://nodejs.org/en/)

  - [ ] `npm install` 실행

### React Dev Tools

  - [ ] Chrome용 [React Dev Tools](https://github.com/facebook/react-devtools) 확장 프로그램을 설치하면 이 sprint의 디버깅이 쉬워집니다.

## Bare Minimum Requirements

  - [ ] `src/index.js` 내부에서 `App` component를 DOM으로 rendering하고 code base를 탐색하여 각 component가 하는 일을 이해하세요.

  - [ ] component를 생각하는 방법에 대해 자세히 알아 보려면 [이 안내서](https://facebook.github.io/react/docs/thinking-in-react.html)를 읽으십시오.
  이 가이드는 이전의 `React.createClass` 구문을 사용하여 class component를 생성합니다.
  React app을 구성하는 철학이나 syntax를 이해하려고 하지마세요.

  - [ ] ES6을 사용하세요. React에서 매우 잘 작동하는 몇 가지 새로운 기능이 있습니다. 이 sprint에서 이 기능들을 사용하기를 강력히 추천드립니다:

      - [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

      - [Arrow function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), 이 기능은 `this`를 binding 하는데 편리한 기능이니다.

      - [Shorthand object property and method syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

      - [Template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings)

      - [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

      - [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Create a dynamic Video List component

front-end app을 만들 때 실제 데이터로 작업하는 복잡성을 일시적으로 무시하고 대신 "가짜" 데이터를 가지고 작업하는 것이 더 생산성이 있을수 있습니다. [**Stateless functional components**](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components)는 이런 부분에서는 정말 편히 사용 됩니다. 왜냐하면 API의 "실제" 데이터를 사용하나 파일의 "가짜"데이터를 사용하나 똑같이 구현 할수 있기 때문입니다.

`src/data/exampleVideoData.js`에 있는 샘플 데이터를 사용하여 stateless functional `VideoList`와 `VideoListEntry` component를 만들 것입니다.

  - [ ] 여러분의 React component에서 사용할 수있도록 `src/data/exampleVideoData.js`를 `index.html`에 포함 시키십시오.

  - [ ] `exampleVideoData`를 `VideoList` component에 전달하세요.

  - [ ] `VideoList` component를 refactor하여 `exampleVideoData` video object 하나 마다 하나의 `VideoListEntry` component를 동적으로 rendering 되게 하세요.

  - [ ] `VideoListEntry` component를 refactoring하여 수신하는 비디오 object에 따라 동적으로 rendering되게 하세요.

모든 설정이 끝나면 페이지에서 제목, 미리보기 이미지 및 일부 React Tutorials의 설명을 볼 수 있습니다.
"unique `key` prop'에 대한 콘솔에서 *경고*를 발견하면 [React's performance](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children)와 관련이 있음을 알 수 있습니다. 무시하셔도 되는 경고 입니다.

### Create a dynamic Video Player component
동영상은 소스 URL을 `VideoPlayer` component 안의 `iframe` 태그에 전달함으로써 재생됩니다. `https://www.youtube.com/embed/` 이후에 포함 된 ID와 관련된 동영상이 재생됩니다. 이것은 또한 stateless functional component이므로 예제 데이터를 사용하여 만들수 있습니다.

  - [ ] `exampleVideoData`에서 하나의 비디오를 `VideoPlayer`로 넘깁니다.

  - [ ] 전달 된 비디오를 재생하고 제목과 설명을 표시하려면 `VideoPlayer`를 업데이트하세요.

### Video List 와 Video Player component들을 연결하세요.

이제 stateless functional component를 interact할수 있게 할시간입니다.
React에서 형제(sibling) component는 서로 직접 액세스 할 수 없으므로 이 component들 간의 통신을 관리하기 위해 상위 component의 도움이 필요합니다.
지금 같은 경우, `App`은 sibling component 인 `VideoList`와 `VideoPlayer`의 부모 component입니다.

  - [ ] `App`을 ES6 class를 사용하여 [class component](https://facebook.github.io/react/docs/reusable-components.html#es6-classes)로 refactor하세요.

  - [ ] 동영상 목록의 모든 동영상과 플레이어의 현재 동영상을 추적하기 위해 `App`의 `state`를 초기화 하세요. 이 `state`를 자식 componet의 `props`로 전달하세요. 예제 데이터를 계속 사용하십시오.

  - [ ] 'VideoListEntry'의 제목을 클릭하면 해당 비디오가 플레이어에 표시되도록하십시오.
  functional component는 `state`를 사용하면 안됩니다.

### YouTube API와의 interaction set up 하기.

YouTube 데이터 API에서 동영상에 액세스하려면 개발자 키가 필요합니다. 타사 API를 사용하면 데이터에 액세스하는 사용자를 추적하고 속도 제한을 적용하며 때로는 수익을 창출하기를 원하기 때문에 이는 일반적인 관행입니다. YouTube API에 대한 액세스는 무료이며 필요한 것은 Google 계정뿐입니다.

  - [ ] Google의 [YouTube API](https://console.developers.google.com/apis/api/youtube/overview)에 가세요.

  - [ ] 메시지가 나타나면 프로젝트를 선택하거나 새 프로젝트를 만드세요. 새로운 프로젝트의 이름은 중요하지 않습니다.

  - [ ] `Enable`을 click하고 `Go to Credentials`로 가세요.

  - [ ] drop-down menu에서 `Web browser`를 선택하고 `Public data` radio button을 선택 하세요.

  - [ ] 키에 아무 이름을 지정하고 옵션 필드를 비워두고 `Create`을 click 하세요.

  - [ ] 새로운 파일 `src/config/youtube.js`에서 여러분의 키를 app에서 사용할수 있게 하세요.

### Create a reusable API helper

YouTube 동영상을 검색하려면 API의 [Search:list](https://developers.google.com/youtube/v3/docs/search/list) endpoint를 사용해야 합니다.
코드를 체계적으로 유지하려면이 endpoint와 interaction을 책임질 helper function을 작성하세요. `lib/searchYouTube.js`에서 `searchYouTube` function을 작성하세요. 아래의 목록을 해야 합니다:

  - [ ] jQuery를 사용하여 search endpoint에 'GET' 요청을 보냅니다. **이 sprint에서 jQuery를 사용해야하는 유일한 시간입니다**

  - [ ] endpoint에 request의 response로 돌아온 video array를 가지고 호출되는 callback function을 argument로 받아야 합니다.

  - [ ] 다음의 property들을 가진 `options` 객체를 받아들입니다:

      - [ ] `query` - 검색해야할 string value

      - [ ] `max` - 가지고와야할 동영상의 최대 개수. 기본값은 5입니다.

      - [ ] `key` - 승인 된 YouTube 브라우저 API 키

  - [ ] embeddable video들만 `GET` 하세요.

### 실시간 data로 app을 시작(initialize)하세요.
실시간 데이터를 통합하기 전에 `exampleVideoData'에 얼마나 많은 작업을 했는지 알아 보기는 시간을 내야합니다.
이제 실제 데이터를 사용으로 생기는 복잡성을 해결할 수 있습니다.
실제 데이터의 모양이 가짜 데이터와 같다고 가정하면 모든 작업은 수월이 계속됩니다.
helper function을 올바르게 작성했다면이 이 섹션은 간단하게 끝낼수 있습니다.

  - [ ] 다른 module들로 해본 것처럼 `searchYouTube`를 사용 할 수있게 만들고 여러분의 app의 `prop`으로 전달하십시오.

  - [ ] `App`의 초기 `state`의 `exampleVideoData`를 빈 초기 값들로 대체하십시오. data type별로 알맞는 빈 초기값을 주세요.

  - [ ] `searchYouTube`에서 return 된 실시간 동영상으로 app을 rendering하려면 [`componentDidMount`](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount) 라이프 사이클 후크(life cycle hook)를 활용하세요.

### live-search 구현하기
`Search`를 만들고 다른 component를 업데이트하세요.

  - [ ] 사용자가 input에 입력하면 `VideoList`및 `VideoPlayer` component가 입력 값과 일치하는 YouTube 데이터 API의 동영상으로 업데이트되게 하세요.

  - [ ] `Search` component에 의해 trigger된 AJAX request를 Debounce하여 최대 *500ms마다 한번*만 trigger되게 하세요. (유튜브의 API가 무료가 아니라고 상상해 보세요 :O)

## Advanced Content
저희 Advanced Content는 여러분이 하기에 벅찬 과제를 도움이나 서포트없이 해결해야 하는 부분입니다. 현업에서 중금 또는 상급 개발자가 혼자서 해결하는것과 같이요.

  - [ ] YouTube API에 다른 request를 하고 더 많은 비디오 정보를 페이지에 rendering하는 `VideoDetails` component를 만드세요.

  - [ ] `VideoList`에서 선택한 비디오의 재생을 자동으로 시작하는 자동 재생 토글 버튼을 만듭니다.

  - [ ] [React Router](https://github.com/reactjs/react-router)의 도움으로 각 동영상에 고유 한 URL을 제공하십시오.

  - [ ] `$.ajax` 대신에 [`fetch`](https://developer.mozilla.org/en/US/docs/Web/API/Fetch_API) function을 사용하여 HTTP request를 하도록 `searchYouTube`을 refactor하세요.

  - [ ] flux를 사용하도록 app을 refactor 하세요. [Redux](http://redux.js.org/)는 고려할만한 flux의 보편적으로 구현된 library입니다.

  - [ ] Module loader [webpack](https://webpack.github.io/)을 사용해 component를 `window`에 노출시키는 대신 ES6 `import`와 `export`를 사용하고 `script` tag로 추가하도록 refactor하세요.

## Resources

* The [Babel REPL](http://babeljs.io/repl/) shows you a ES5 representation of ES6/JSX code
* [ES6 Features](https://github.com/lukehoban/es6features)
* [Facebook's React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [Intro to Redux](https://egghead.io/series/getting-started-with-redux)
