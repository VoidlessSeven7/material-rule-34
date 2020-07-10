import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  // Root State
  new VuexPersistence({
    key: 'state',

    reducer: (state) => {
      const SETTINGS_OBJ = { userSettings: {} }

      // Recreate every setting's value path to save them to localStorage (this way we dont save other data like titles, defaultValue, etc.)
      Object.keys(state.userSettings).forEach((key) => {
        SETTINGS_OBJ.userSettings[key] = {
          value: state.userSettings[key].value,
        }
      })

      // Recreate the part of the store that we want to save
      return {
        booruData: { active: state.booruData.active },

        ...SETTINGS_OBJ,
      }
    },
  }).plugin(store)

  // Premium State
  new VuexPersistence({
    key: 'premium',

    reducer: (state) => ({
      premium: {
        gumroad: {
          product: { license_key: state.premium.gumroad.product.license_key },
        },
      },
    }),
  }).plugin(store)

  // Notifications state
  new VuexPersistence({
    key: 'notifications',

    reducer: (state) => ({
      notifications: {
        // Double because the state and module are named the same
        notifications: {
          latestTitle: state.notifications.notifications.latestTitle,
        },
      },
    }),
  }).plugin(store)
}
