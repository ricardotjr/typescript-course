import { Application } from 'express';
import { RouterModuleFactory } from './router-map';
import { HttpVerbMap, FeatureModuleRouterInfo } from './base-routes-module';

export class RouterModule {

    private routerFactory : RouterModuleFactory;
    private express: Application;

    constructor(app: Application) {
        this.express = app;
        this.routerFactory = new RouterModuleFactory();
    }

    public exposeRoutes(authenticate?: Function): void {
        
        const registeredModules = this.routerFactory.getRegisteredModules();
        if (registeredModules && Array.isArray(registeredModules)) {
            registeredModules
                .forEach(this.extractRouterInfoFromModule.bind(this, authenticate));
        }
    }

    private extractRouterInfoFromModule(authenticate: Function, routerFeatModule: HttpVerbMap) {
        if (routerFeatModule) {
            const registeredVerbs = Object.keys(routerFeatModule);
            registeredVerbs.forEach(this.extractInfoByVerb.bind(this, authenticate, routerFeatModule));
        }
    }

    private extractInfoByVerb(authenticate: Function, routerFeatModule: HttpVerbMap, regiseredVerb: string) {
        routerFeatModule[regiseredVerb]
            .forEach(this.mountRoutes.bind(this, authenticate, regiseredVerb));
    }

    private mountRoutes(authenticate: Function, regiseredVerb: string, routerInfo: FeatureModuleRouterInfo) {
        if (routerInfo) {
            const { isProtected, callback, endpoint } = routerInfo;
            isProtected 
                ? this.express.route(endpoint).all(authenticate())[regiseredVerb](callback)
                : this.express.route(endpoint)[regiseredVerb](callback)
        }
    }
}