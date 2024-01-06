import express from 'express';
import { test } from '../controllers/test.controller.js';

const app = express.Router();

app.get('/test', test);

export default test;// This name can be anything and you can import with different name since it's export is default