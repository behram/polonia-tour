(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{346:function(e,t,a){"use strict";var n=a(1),r=a.n(n),o=a(154),l=a(80),i=a(157),c=a(596),u=a(177),m=a(53),s=a(43),d=a(17),f="/private/var/www/PWr/6thSemester/TeamProject/Project/Code/Polonia-Tour-Mobile-App/LocationCard.js";class p extends n.Component{render(){var{city:e,name:t,description:a,linkPhoto:n,category:o,coordinates:l}=this.props.data;return r.a.createElement(d.Container,{__source:{fileName:f,lineNumber:17,columnNumber:7}},r.a.createElement(d.Content,{__source:{fileName:f,lineNumber:18,columnNumber:9}},r.a.createElement(d.Card,{style:{flex:1},__source:{fileName:f,lineNumber:19,columnNumber:11}},r.a.createElement(d.CardItem,{__source:{fileName:f,lineNumber:20,columnNumber:13}},r.a.createElement(d.Left,{__source:{fileName:f,lineNumber:21,columnNumber:15}},r.a.createElement(d.Thumbnail,{source:{uri:n[0]||""!==n[0]?n[0]:"https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102__340.png"},__source:{fileName:f,lineNumber:22,columnNumber:17}}),r.a.createElement(d.Body,{__source:{fileName:f,lineNumber:23,columnNumber:17}},r.a.createElement(s.a,{__source:{fileName:f,lineNumber:24,columnNumber:19}},t),r.a.createElement(s.a,{note:!0,__source:{fileName:f,lineNumber:25,columnNumber:19}},r.a.createElement(d.Icon,{style:{fontSize:16},type:"Entypo",name:"location-pin",__source:{fileName:f,lineNumber:26,columnNumber:21}}),e)))),r.a.createElement(d.CardItem,{__source:{fileName:f,lineNumber:32,columnNumber:13}},r.a.createElement(d.Body,{__source:{fileName:f,lineNumber:33,columnNumber:15}},r.a.createElement(m.a,{source:{uri:n[0]?n[0]:"https://cdn.pixabay.com/photo/2013/07/13/14/05/location-162102__340.png"},style:{height:200,width:200,flex:1},__source:{fileName:f,lineNumber:34,columnNumber:17}}),r.a.createElement(s.a,{__source:{fileName:f,lineNumber:38,columnNumber:17}},"Category: ",o.toUpperCase()))))))}}var g=a(170),E=a(4),b=a.n(E),h=a(6),N=a.n(h),v=a(8),y=a.n(v),_=a(9),C=a.n(_),k=a(2),x=a.n(k),T=a(60);function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x()(e);if(t){var r=x()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return C()(this,a)}}var w=function(e){y()(a,e);var t=I(a);function a(){return b()(this,a),t.apply(this,arguments)}return N()(a,[{key:"render",value:function(){return r.a.createElement(d.Header,{style:{marginTop:T.a.currentHeight,backgroundColor:"#069"}},r.a.createElement(d.Left,null,r.a.createElement(d.Button,{transparent:!0},r.a.createElement(d.Icon,{type:"FontAwesome",name:"location-arrow"}),r.a.createElement(s.a,{style:{fontWeight:"bold",color:"#FFF",marginLeft:10}},"Polonia Tour"))),r.a.createElement(d.Right,null,r.a.createElement(d.Button,{transparent:!0},r.a.createElement(d.Icon,{name:"menu"}))))}}]),a}(n.Component),R=a(10),P=a(81),D=a(343);function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x()(e);if(t){var r=x()(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return C()(this,a)}}var S=function(e){y()(a,e);var t=L(a);function a(e){return b()(this,a),t.call(this,e)}return N()(a,[{key:"render",value:function(){var e=this.props.navigation.state.params.item;return r.a.createElement(d.Container,null,r.a.createElement(D.a,{style:j.container,images:this.props.navigation.state.params.item.linkPhoto}),r.a.createElement(d.Content,null,r.a.createElement(d.Card,null,r.a.createElement(d.CardItem,{header:!0},r.a.createElement(d.Text,null,"Description")),r.a.createElement(d.CardItem,null,r.a.createElement(d.Body,null,r.a.createElement(d.Text,null,e.description))),r.a.createElement(d.CardItem,{footer:!0},r.a.createElement(d.Content,null,r.a.createElement(d.Card,null,r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"at"}),r.a.createElement(d.Text,null,"Name"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,null,e.name))),r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"navigate"}),r.a.createElement(d.Text,null,"City"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,null,e.city))),r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"compass"}),r.a.createElement(d.Text,null,"Region"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,null,e.region))),r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"albums"}),r.a.createElement(d.Text,null,"Category"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,null,e.category))),r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"link"}),r.a.createElement(d.Text,null,"Link Reservation"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,{style:{color:"#069"},onPress:function(){return P.a.openURL(e.linkReservation)}},"Go to link"))),r.a.createElement(d.CardItem,null,r.a.createElement(d.Icon,{color:"#069",active:!0,name:"time"}),r.a.createElement(d.Text,null,"Opening Hours"),r.a.createElement(d.Right,null,r.a.createElement(d.Text,null,e.openingHour?e.openingHour+" AM/PM":"-")))))))))}}]),a}(n.Component);S.navigationOptions={headerTintColor:"#ffffff",headerStyle:{backgroundColor:"#069",borderBottomColor:"#ffffff",borderBottomWidth:3},headerTitleStyle:{fontSize:18}};var j=R.a.create({container:{flex:.6}}),A=S,W=a(221),O=a.n(W);a(548);O.a.initializeApp({apiKey:"AIzaSyAm4MQMpTuVh-TUxu-j3q0KAVJZ7ZllzCU",authDomain:"poloniat-d76bf.firebaseapp.com",databaseURL:"https://poloniat-d76bf.firebaseio.com",projectId:"poloniat-d76bf",storageBucket:"poloniat-d76bf.appspot.com",messagingSenderId:"910563882699"});var U=O.a,M=a(40),B=a(345),z="/private/var/www/PWr/6thSemester/TeamProject/Project/Code/Polonia-Tour-Mobile-App/App.js";function G(e,t,a,n,r,o,l){try{var i=e[o](l),c=i.value}catch(u){return void a(u)}i.done?t(c):Promise.resolve(c).then(n,r)}var F=a(549);i.a.ignoreWarnings(["Setting a timer"]);class H extends r.a.Component{constructor(e){super(e),this.onCollectionUpdate=e=>{var t=[];e.forEach(e=>{t=[...t,e.data()]}),this.setState({allPlaces:t,loading:!1})},this.ref=U.firestore().collection("Attraction"),this.state={latitude:51.108543,longitude:17.040353,locations:F,loading:!1,allPlaces:[],coordinates:[]}}componentWillUnmount(){this.unsubscribe()}componentDidMount(){var e,t=this;return(e=function*(){t.unsubscribe=t.ref.onSnapshot(t.onCollectionUpdate);var{status:e}=yield c.a.getAsync(c.a.LOCATION);"granted"!==e&&(yield c.a.askAsync(c.a.LOCATION)),navigator.geolocation.getCurrentPosition(e=>{var{coords:{latitude:a,longitude:n}}=e;return t.setState({latitude:a,longitude:n},()=>console.log("My location coordinates",a,n))},e=>o.a.alert(e));var{locations:[a]}=t.state;t.setState({desLatitude:a.coords.latitude,desLongtitude:a.coords.longitude})},function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function l(e){G(o,n,r,l,i,"next",e)}function i(e){G(o,n,r,l,i,"throw",e)}l(void 0)}))})()}render(){var{coords:e,latitude:t,longitude:a,locations:n,allPlaces:o}=this.state;return r.a.createElement(d.Container,{style:{flex:1},__source:{fileName:z,lineNumber:70,columnNumber:7}},r.a.createElement(w,{__source:{fileName:z,lineNumber:71,columnNumber:9}}),r.a.createElement(u.c,{provider:u.b,showsUserLocation:!0,followsUserLocation:!0,style:{flex:1.2},initialRegion:{latitude:t,longitude:a,latitudeDelta:.0922,longitudeDelta:.0421},__source:{fileName:z,lineNumber:72,columnNumber:9}},n.map((e,t)=>{console.log(e);var{latitude:a,longitude:n}=e.coords;return r.a.createElement(u.a,{key:t,title:e.name,coordinate:{latitude:a,longitude:n},description:e.category,__source:{fileName:z,lineNumber:97,columnNumber:15}})})),r.a.createElement(g.a,{keyExtractor:(e,t)=>e.description,horizontal:!0,data:o,renderItem:e=>{var{item:t,i:a}=e;return r.a.createElement(l.a,{onPress:()=>this.props.navigation.navigate("LocationDetails",{item:t}),__source:{fileName:z,lineNumber:112,columnNumber:15}},r.a.createElement(p,{data:t,__source:{fileName:z,lineNumber:113,columnNumber:17}}))},__source:{fileName:z,lineNumber:106,columnNumber:9}}))}}var J=Object(M.createStackNavigator)({Main:{screen:H,navigationOptions:()=>({header:null})},LocationDetails:{screen:A,navigationOptions:()=>({title:"Location Details"})}},{mode:"modal"});t.a=Object(B.createAppContainer)(J)},349:function(e,t,a){a(350),e.exports=a(571)},350:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},549:function(e){e.exports=JSON.parse('[{"name":"Galeria Dominikanska","address":"Wroclaw","coords":{"latitude":51.108543,"longitude":17.040353},"image_url":"http://galeria-dominikanska.pl/files/gallery/fotob-52.jpg"},{"name":"Galeria Dominikanska 2","address":"Wroclaw","coords":{"latitude":51.10854443,"longitude":17.040135043},"image_url":"http://galeria-dominikanska.pl/files/gallery/fotob-52.jpg"},{"name":"Galeria Dominikanska 3","address":"Wroclaw","coords":{"latitude":51.12108543,"longitude":17.04076353},"image_url":"http://galeria-dominikanska.pl/files/gallery/fotob-52.jpg"},{"name":"Galeria Dominikanska 4","address":"Wroclaw","coords":{"latitude":51.10238543,"longitude":17.0460353},"image_url":"http://galeria-dominikanska.pl/files/gallery/fotob-52.jpg"},{"name":"Galeria Dominikanska 5","address":"Wroclaw","coords":{"latitude":51.10863543,"longitude":17.04340353},"image_url":"http://galeria-dominikanska.pl/files/gallery/fotob-52.jpg"}]')}},[[349,1,2]]]);
//# sourceMappingURL=app.c06c8422.chunk.js.map