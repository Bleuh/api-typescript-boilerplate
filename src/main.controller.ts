// src/main.controller.ts

import { Application } from 'express';
import ApiService from './services/api.service';

export default class Controller {
  private apiService: ApiService;

  constructor(private app: Application) {
    this.apiService = new ApiService();
    this.routes();
  }

  public routes(): void {
    // List of endpoint available
    this.app.route('/').all((req, res) => ApiService.endPointsList(req, res));
  }
}
