Morph.versions["bbc-morph-sport-football-scores-filtered@1.1.6"]={"babel-runtime":"6.26.0","bbc-morph-sport-filter":"2.0.3","bbc-morph-sport-filter-data-provider-football-regional-interests":"3.0.1","bbc-morph-sport-filter-data-provider-priority-order-football-scores":"2.3.1","bbc-morph-sport-football-scores-components":"5.2.0","bbc-morph-sport-football-scores-filter-competitions-by-region-data":"2.0.8","bbc-morph-sport-football-scores-filter-priority-order-data":"2.1.10","morph":"5.3.1","morph-container":"4.0.0","react":"0.14.7"};
!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports={create:function(e,t){return Morph.createContainerWithCaller("bbc-morph-sport-football-scores-filtered@1.1.6",e,t)}}},function(e,t){e.exports=React},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(3),n=r.n(a);Morph.modules["bbc-morph-sport-football-scores-filtered@1.1.6"]=n.a},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=a(n),s=r(1),i=a(s),l=r(4),u=a(l),d=r(5),p=a(d),c=r(6),f=a(c),m=function(e){return-1===["england","wales","scotland","ireland","womens","european"].indexOf(e)&&p.default.throw(400,"The group parameter must belong to the following list:england, wales, scotland, ireland, womens, european. \n\nGot: "+e),!0},h=i.default.createClass({displayName:"Component",getInitialState:function(){return{selected:""}},getSelected:function(){return this.state.selected&&""!==this.state.selected?this.state.selected:this.props.data.body.groups[0].items[0].selectedValue},renderSelected:function(){var e=this.getSelected(),t=this.props,r=t.limit,a=t.isApp,n=t.group,o=t.abbrAtDesktop,s=t.date;return i.default.createElement(f.default,{abbrAtDesktop:o,tournament:e,isApp:a,limit:r,date:s,group:n})},validResponse:function(){return this.props.data&&200===this.props.data.meta.responseCode},render:function(){var e=this,t=this.props,r=t.limit,a=t.titleId,n=t.isApp,o=t.headingTitle,s=void 0===o?"Football Scores":o,l=t.titleClassName,d=void 0===l?"qa-sport-scores-filter-heading gel-double-pica gs-u-mv+":l,p=t.data,c=t.renderInAside,f=t.asideClassName,m=t.asideAriaLabelledby;if(!this.validResponse())return i.default.createElement("p",{className:"gel-pica gel-mb"},"No fixtures available.");if(0===parseInt(r,10))return null;var h={className:d};a&&(h.id=a);var b=p.body.groups,g=i.default.createElement("div",{className:"qa-sport-football-scores-filtered-wrapper"},i.default.createElement("h2",h,s),i.default.createElement(u.default,{groups:b,isApp:n,onChange:function(t){e.setState({selected:t.selectedValue})}}),this.renderSelected());return c?i.default.createElement("aside",{className:f,"aria-labelledby":m},g):g}}),b=function(e){return{"northern-ireland":"ireland",irish:"ireland",scottish:"scotland",welsh:"wales"}[e]||e};t.default=o.default.create(h,{data:function(e){if(e.group){var t=b(e.group);return m(t),{data:{uri:{data:"bbc-morph-sport-filter-data-provider-football-regional-interests",group:b(e.group)},requireSuccess:!0}}}var r={data:"bbc-morph-sport-filter-data-provider-priority-order-football-scores"};return e.tournaments&&(r.tournaments=e.tournaments),e.priority&&(r.priority=e.priority),{data:{uri:r}}}})},function(e,t){e.exports=Morph.modules["bbc-morph-sport-filter@2.0.3"]},function(e,t){e.exports=Morph},function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var n=r(1),o=a(n),s=r(0),i=a(s),l=r(7),u=o.default.createClass({displayName:"sport-football-filter",getBody:function(){return this.props.data.body},getRounds:function(){return this.getBody().rounds},getDate:function(){return this.getBody().date},getType:function(){return this.getBody().type},getTournamentName:function(){return this.getBody().tournament},getNumberOfEvents:function(){return this.getRounds().reduce(function(e,t){return e+t.events.length},0)},hasEventsToDisplay:function(){return!!this.getRounds()},render:function(){var e=this.props,t=e.limit,r=void 0===t?12:t,a=e.data,n=e.abbrAtDesktop,s=e.isApp;return a&&this.getBody()&&this.hasEventsToDisplay()?o.default.createElement("div",null,o.default.createElement(l.DateWrapper,{date:this.getDate()}),o.default.createElement(l.FixtureList,{abbrAtDesktop:n,rounds:this.getRounds(),isApp:s,limit:r}),o.default.createElement(l.ViewAllLink,{title:this.getType(),tournamentName:this.getTournamentName().name,tournamentSlug:this.getTournamentName().slug,totalEvents:this.getNumberOfEvents(),limit:r,isApp:s})):o.default.createElement("p",{className:"gel-pica gel-mb"},"No fixtures available.")}});e.exports=i.default.create(u,{data:function(e){if(e.group)return{data:{uri:{data:"bbc-morph-sport-football-scores-filter-competitions-by-region-data",tournament:e.tournament},requireSuccess:!0}};var t={data:"bbc-morph-sport-football-scores-filter-priority-order-data",tournament:e.tournament};return e.date&&(t.date=e.date),{data:{uri:t,requireSuccess:!0}}}})},function(e,t){e.exports=Morph.modules["bbc-morph-sport-football-scores-components@5.2.0"]}]);
//# sourceMappingURL=bundle.js.map