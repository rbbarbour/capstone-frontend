_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{V09l:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/restaurant",function(){return t("fLDY")}])},fLDY:function(n,e,t){"use strict";t.r(e),function(n){var a=t("q1tI"),r=t.n(a),i=t("f1Oq"),u=t("VX74"),l=t("ii2Z"),o=t("q7Gj"),c=t("re1l"),s=t("L3zb"),d=t("JDnx"),p=r.a.createElement;e.default=function(){var e=n.env.NEXT_PUBLIC_API_URL||"http://3.87.94.48:1337";console.log("URL: ".concat(e));var t=Object(a.useState)(""),r=t[0],h=t[1],f=new u.HttpLink({uri:"".concat(e,"/graphql")}),m=new u.InMemoryCache,g=new u.ApolloClient({link:f,cache:m}),v=Object(a.useContext)(d.a),w=v.addItem,_=(v.cart,v.restaurant);return p(u.ApolloProvider,{client:g},p("div",{className:"search"},p("h2",null,_.name),p(o.a,null,p(c.a,{addonType:"append"}," Search "),p(s.a,{onChange:function(n){return h(n.target.value.toLocaleLowerCase())},value:r})),p("br",null)),p(l.a,{search:r,restId:_.id,value:{addItem:w}}),p(i.a,null))}}.call(this,t("8oxB"))},ii2Z:function(n,e,t){"use strict";var a=t("h4VS"),r=t("q1tI"),i=t.n(r),u=t("VX74"),l=t("JDnx"),o=t("rhny"),c=t("BLzl"),s=t("ChEw"),d=t("umxu"),p=t("/kxI"),h=t("ezmu"),f=t("sOKU"),m=t("1Yj4"),g=t("ok1R"),v=i.a.createElement;function w(){var n=Object(a.a)(["\n    query ($id: ID!) {\n      restaurant(id: $id) {\n        id\n        name\n        dishes {\n          id\n          name\n          description\n          price\n          image {\n            url\n          }\n        }\n      }\n    }\n  "]);return w=function(){return n},n}e.a=function(n){var e=n.restId,t=n.search,a=Object(r.useContext)(l.a).addItem,i=Object(u.gql)(w()),_=Object(u.useQuery)(i,{variables:{id:e}}),L=_.loading,b=_.error,I=_.data;if(L)return v("p",null,"Loading...");if(b)return v("p",null,"ERROR here");if(!I)return v("p",null,"Not found");var x=I.restaurant.dishes.filter((function(n){return n.name.toLowerCase().includes(t)}));if(x.length>0){var y=x.map((function(n){return v(o.a,{xs:"6",sm:"4",style:{padding:0},key:n.id},v(c.a,{style:{margin:"0 0.5rem 20px 0.5rem"}},v(s.a,{style:{paddingLeft:20,paddingTop:10}},v("h5",null,n.name)),v(d.a,{top:!0,style:{height:200},src:"http://3.87.94.48:1337/".concat(n.image.url)}),v(p.a,null,v(h.a,{style:{height:50}},n.description)),v("div",{className:"card-footer"},"$",n.price.toFixed(2),v("br",null),v(f.a,{color:"info",onClick:function(){return a(n)}},"+ Add To Cart"))))}));return v(m.a,null,v(g.a,{xs:"3"},y))}return v("h1",null," No Dishes Found")}}},[["V09l",0,2,1,3,4,6]]]);