import { createRootRouteWithContext, createRoute, createRouter, redirect } from '@tanstack/react-router'
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
import { CheckoutComponent } from './components/CheckoutComponent'
import { TrackShipmentComponent } from './components/TrackShipmentComponent'
import { AdminOverviewComponent } from './components/AdminOverviewComponent'
import { AdminProductsComponent } from './components/AdminProductsComponent'
import { AdminOrdersComponent } from './components/AdminOrdersComponent'
import { AdminLoginComponent } from './components/AdminLoginComponent'

export interface MyRouterContext {
  isAuthenticated: boolean;
  isAdminAuthenticated: boolean;
}

export const rootRoute = createRootRouteWithContext<MyRouterContext>()({
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
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/',
      })
    }
  },
})

export const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: SignupComponent,
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: '/',
      })
    }
  },
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
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const ordersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/orders',
  component: UserOrdersComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const wishlistRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/wishlist',
  component: UserWishlistComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile/settings',
  component: UserSettingsComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const cartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/cart',
  component: ShoppingCartComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const checkoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: CheckoutComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const trackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/track/$orderId',
  component: TrackShipmentComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const wishlistAliasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wishlist',
  component: UserWishlistComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
})

export const adminOverviewRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/overview',
  component: AdminOverviewComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAdminAuthenticated) {
      throw redirect({
        to: '/admin/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const adminLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/login',
  component: AdminLoginComponent,
  beforeLoad: ({ context }) => {
    if (context.isAdminAuthenticated) {
      throw redirect({
        to: '/admin/overview',
      })
    }
  },
})

export const adminProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/products',
  component: AdminProductsComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAdminAuthenticated) {
      throw redirect({
        to: '/admin/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const adminOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/orders',
  component: AdminOrdersComponent,
  beforeLoad: ({ context }) => {
    if (!context.isAdminAuthenticated) {
      throw redirect({
        to: '/admin/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signupRoute, categoriesRoute, editorialRoute, collectionsRoute, productDetailsRoute, profileRoute, ordersRoute, wishlistRoute, wishlistAliasRoute, settingsRoute, cartRoute, checkoutRoute, trackRoute, adminOverviewRoute, adminProductsRoute, adminOrdersRoute, adminLoginRoute])
export const router = createRouter({ 
  routeTree,
  context: {
    isAuthenticated: false,
    isAdminAuthenticated: false,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
