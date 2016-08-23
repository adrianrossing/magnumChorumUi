/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {provideStore, combineReducers} from '@ngrx/store';

import {todos, visibility, initialTodo, initialVisibility} from './app/reducers/todos';

import './index.css';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {provideRouter} from '@angular/router';
import {enableProdMode} from '@angular/core';
import {routes, Root} from './routes';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

bootstrap(Root, [
  provideRouter(routes),
  provideStore(combineReducers({todos, visibility}), {todos: [initialTodo], visibility: initialVisibility})
]);