import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';
import { Category } from 'src/db/category.entity.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    Category,
  ],
  databases: [],
};

export default options;
