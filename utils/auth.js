export function authenticated(ctx, predicate = state => !!state.user) {
  const { store } = ctx;
  if (!store) {
    return false;
  }
  return predicate(store.getState());
}
