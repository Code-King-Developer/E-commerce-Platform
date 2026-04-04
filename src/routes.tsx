import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RootComponent } from './components/RootComponent'
import { HomeComponent } from './components/HomeComponent'
import { LoginComponent } from './components/LoginComponent'
import { SignupComponent } from './components/SignupComponent'
import { CategoriesComponent } from './components/CategoriesComponent'
import { EditorialComponent } from './components/EditorialComponent'
import { CollectionsComponent } from './components/CollectionsComponent'
import { ProductDetailsComponent } from './components/ProductDetailsComponent'
import { UserProfileComponent } from './components/UserProfileComponent'
import { UserOrdersComponent } from './components/UserOrdersComponent'
import { UserWishlistComponent } from './components/UserWishlistComponent'
import { UserSettingsComponent } from './components/UserSettingsComponent'
import { ShoppingCartComponent } from './components/ShoppingCartComponent'
import { TrackShipmentComponent } from './components/TrackShipmentComponent'
export const rootRoute = createRootRoute({
  component: RootComponent,
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeComponent,
})

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginComponent,
})

export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupComponent,
})

export const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
  component: CategoriesComponent,
})

export const editorialRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/editorial',
  component: EditorialComponent,
})

export const collectionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/collections',
  component: CollectionsComponent,
})

export const productDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/product/$productId',
  component: ProductDetailsComponent,
})

export const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: UserProfileComponent,
})

export const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/orders',
  component: UserOrdersComponent,
})

export const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/wishlist',
  component: UserWishlistComponent,
})

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/settings',
  component: UserSettingsComponent,
})

export const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: ShoppingCartComponent,
})

export const trackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/track',
  component: TrackShipmentComponent,
})

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signupRoute, categoriesRoute, editorialRoute, collectionsRoute, productDetailsRoute, profileRoute, ordersRoute, wishlistRoute, settingsRoute, cartRoute, trackRoute])
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
