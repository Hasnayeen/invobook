import { shallow, createLocalVue } from 'vue-test-utils'
import discussionDetails from 'components/partials/discussionDetails.vue'

const localVue = createLocalVue()

var generateUrl = {
  methods: {
    generateUrl: function (value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg'
      value = value.toString()
      return window.location.protocol + '//' + window.location.host + '/' + value
    }
  }
}

localVue.mixin(generateUrl)

describe('discussionDetail', () => {
  it('shows discussion title', () => {
    const wrapper = shallow(discussionDetails, {
      localVue,
      propsData: {
        discussion: {
          id: 1,
          name: 'Create New Release Plan',
          creator: {
            avatar: '',
            name: 'John Doe'
          }
        }
      }
    })

    expect(wrapper.find('div[data-discussion-id="1"]').text()).toBe('Create New Release Plan')
  })
})
