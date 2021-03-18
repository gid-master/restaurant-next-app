import { ApplicationState } from '@/client/store';

export const getProducts = (state: ApplicationState) => state.product.products;
export const getSearchTerm = (state: ApplicationState) => state.product.searchTerm;
export const getFilterId = (state: ApplicationState) => state.product.filterId;
export const getSortId = (state: ApplicationState) => state.product.sortId;

export const getPromotions = (state: ApplicationState) => state.product.products.filter((data) => data.previousPrice > 0);
export const getSuggestions = (state: ApplicationState) => state.product.products.filter((data) => data.suggested);
export const getOffers = (state: ApplicationState) => state.product.products.filter((data) => data.special);

// export const getFromCategories = (state: ApplicationState) =>
//     state.product.preferredProduct
//         ? state.product.products.filter(
//               (data) => data.category === state.product.preferredProduct.category && data.id !== state.product.preferredProduct.id
//           )
//         : [];
