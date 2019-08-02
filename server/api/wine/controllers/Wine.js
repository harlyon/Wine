'use strict';

/**
 * Wine.js controller
 *
 * @description: A set of functions called "actions" for managing `Wine`.
 */

module.exports = {

  /**
   * Retrieve wine records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.wine.search(ctx.query);
    } else {
      return strapi.services.wine.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a wine record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.wine.fetch(ctx.params);
  },

  /**
   * Count wine records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.wine.count(ctx.query);
  },

  /**
   * Create a/an wine record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.wine.add(ctx.request.body);
  },

  /**
   * Update a/an wine record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.wine.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an wine record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.wine.remove(ctx.params);
  }
};
