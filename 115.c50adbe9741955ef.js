"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[115],{9115:(J,d,i)=>{i.r(d),i.d(d,{default:()=>$});var h=i(6814),T=i(2296),x=i(617),c=i(1476),l=i(5313),Z=i(2596),g=i(553),A=i(8645),f=i(9773),y=i(3519),m=i.n(y),t=i(9212),b=i(6593),D=i(7700),p=i(1474),R=i(5619),S=i(9397);let v=(()=>{class e{constructor(){this.url=g.N.url,this.limit=g.N.pagination,this._httpCliente=(0,t.f3M)(p.eN),this._logs=new R.X(null)}set logs(a){this._logs.next(a)}get logs$(){return this._logs.asObservable()}getAllLogs(a){let o=new p.LE;return o=o.append("page",a),o=o.append("limit",this.limit),this._httpCliente.get(`${this.url}logs`,{params:o}).pipe((0,S.b)(s=>{this._logs.next(s)}))}getLogsPaginated(a){let o=new p.LE;return o=o.append("page",a),o=o.append("limit",this.limit),this._httpCliente.get(`${this.url}logs`,{params:o})}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var C=i(8109),w=i(5407);function P(e,n){1&e&&(t.TgZ(0,"th",17),t._uU(1," Acci\xf3n "),t.qZA())}function U(e,n){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(),t.hij(" ",a.action," ")}}function N(e,n){1&e&&(t.TgZ(0,"th",17),t._uU(1," Descripci\xf3n "),t.qZA())}function Y(e,n){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(),t.hij(" ",a.descripcion,"")}}function Q(e,n){1&e&&(t.TgZ(0,"th",17),t._uU(1," Usuario "),t.qZA())}function j(e,n){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(),t.hij(" ",a.id_usuario?a.id_usuario.nombre:""," ")}}function B(e,n){1&e&&(t.TgZ(0,"th",17),t._uU(1," Fecha "),t.qZA())}function F(e,n){if(1&e&&(t.TgZ(0,"td",18),t._uU(1),t.ALo(2,"date"),t.qZA()),2&e){const a=n.$implicit;t.xp6(),t.hij(" ",t.xi3(2,1,a.created_at,"short")," ")}}function z(e,n){1&e&&t._UZ(0,"tr",19)}function I(e,n){1&e&&t._UZ(0,"tr",20)}const $=[{path:"",component:(()=>{class e{constructor(a,o,s,u,r,E){this.titleService=a,this.dialog=o,this._changeDetectorRef=s,this._logsService=u,this.router=r,this.activatedRoute=E,this._unsubscribeAll=new A.x,this.displayedColumns=["accion","descripcion","fecha","usuario"],this.dataSource=new l.by([]),this.totalLogs=0,this.page=0,this.limit=g.N.pagination,this.loading=!1,this.titleService.setTitle("Portal Calidad | Logs"),this.Toast=m().mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:L=>{L.addEventListener("mouseenter",m().stopTimer),L.addEventListener("mouseleave",m().resumeTimer)}})}ngOnInit(){this.activatedRoute.queryParams.subscribe(a=>{a.page?this.page=parseInt(a.page)-1:(this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:"1"}}),this.page=0)}),this._logsService.logs$.pipe((0,f.R)(this._unsubscribeAll)).subscribe(a=>{this.dataSource=new l.by(a.data),this.totalLogs=a.total,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}getLogsPaginated(a){this._logsService.getLogsPaginated(a).pipe((0,f.R)(this._unsubscribeAll)).subscribe({next:o=>{this._logsService.logs=o,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:a}}),this.loading=!1,this._changeDetectorRef.markForCheck()},error:o=>{this.loading=!1,this._changeDetectorRef.markForCheck()}})}handlePageEvent(a){let o=a.pageIndex+1;this.page=a.pageIndex,this.loading=!0,this.getLogsPaginated(o)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(b.Dx),t.Y36(D.uw),t.Y36(t.sBO),t.Y36(v),t.Y36(C.F0),t.Y36(C.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-logs"]],standalone:!0,features:[t.jDz],decls:26,vars:11,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto","bg-white"],[1,"flex-auto","p-6","sm:px-26","sm:py-10"],[1,"min-h-100"],[1,"flex","flex-col","sm:flex-row","sm:justify-between","sm:items-center","items-start","mb-6","w-full","p-4"],[1,"text-4xl","font-semibold","text-primary-700"],[1,"w-full","flex","justify-end"],["aria-label","Seleccionar pagina de comisiones","showFirstLastButtons","true",3,"length","pageSize","pageIndex","disabled","page"],[1,"overflow-x-auto"],["mat-table","",1,"w-full",3,"dataSource"],["matColumnDef","accion"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","descripcion"],["matColumnDef","usuario"],["matColumnDef","fecha"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(o,s){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2",4),t._uU(5,"Registro de Actividades"),t.qZA()(),t.TgZ(6,"div",5)(7,"mat-paginator",6),t.NdJ("page",function(r){return s.handlePageEvent(r)}),t.qZA()(),t.TgZ(8,"div",7)(9,"table",8),t.ynx(10,9),t.YNc(11,P,2,0,"th",10)(12,U,2,1,"td",11),t.BQk(),t.ynx(13,12),t.YNc(14,N,2,0,"th",10)(15,Y,2,1,"td",11),t.BQk(),t.ynx(16,13),t.YNc(17,Q,2,0,"th",10)(18,j,2,1,"td",11),t.BQk(),t.ynx(19,14),t.YNc(20,B,2,0,"th",10)(21,F,3,4,"td",11),t.BQk(),t.YNc(22,z,1,0,"tr",15)(23,I,1,0,"tr",16),t.qZA()(),t.TgZ(24,"div",5)(25,"mat-paginator",6),t.NdJ("page",function(r){return s.handlePageEvent(r)}),t.qZA()()()()()),2&o&&(t.xp6(7),t.Q6J("length",s.totalLogs)("pageSize",s.limit)("pageIndex",s.page)("disabled",s.loading),t.xp6(2),t.Q6J("dataSource",s.dataSource),t.xp6(13),t.Q6J("matHeaderRowDef",s.displayedColumns),t.xp6(),t.Q6J("matRowDefColumns",s.displayedColumns),t.xp6(2),t.Q6J("length",s.totalLogs)("pageSize",s.limit)("pageIndex",s.page)("disabled",s.loading))},dependencies:[h.ez,h.uU,T.ot,x.Ps,l.p0,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,c.TU,c.NW,Z.AV,w.PQ]})}return e})(),resolve:{logs:(e,n)=>{let a=e.queryParamMap.get("page")||"1";return(0,t.f3M)(v).getAllLogs(a)}}}]}}]);