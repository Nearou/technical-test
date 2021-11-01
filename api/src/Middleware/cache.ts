"use strict";

const mcache = require("memory-cache");


let memCache = new mcache.Cache();

export const cacheMiddleware = duration => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      res.send(cacheContent);
      console.log('reading from cache');
      return;
    } else {
      res.sendResponse = res.send;
      res.send = body => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body);
      };
      console.log('storing in cache');
      next();
    }
  };
};