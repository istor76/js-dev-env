/*
  This file contains references to the vendor libraries
  we're using in this project. This is used by webpack
  in the PRODUCTION BUILD ONLY.
  A seprate bundle for vendor code id useful since it's unlikely
  to change as often as the application's code.
  All the libraries we reference here will be written to vendor.js
  so they can be cached until one of them change. So basically, this avoids 
  customers having to download a huge JS file anytime a line of code in the application changes.
  They only have to download vendor.jd when a vendor library changes which should be less frequent.
  Any files that aren't refrenced here will ve bundled into main.js for production build.
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
