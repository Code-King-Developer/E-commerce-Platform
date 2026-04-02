import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { RootComponent } from './components/RootComponent'
import { HomeComponent } from './components/HomeComponent'
import { LoginComponent } from './components/LoginComponent'
import { SignupComponent } from './components/SignupComponent'
import { CategoriesComponent } from './components/CategoriesComponent'
import { EditorialComponent } from './components/EditorialComponent'
import { CollectionsComponent } from './components/CollectionsComponent'

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

export const routeTree = rootRoute.addChildren([indexRoute, loginRoute, signupRoute, categoriesRoute, editorialRoute, collectionsRoute])
export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
