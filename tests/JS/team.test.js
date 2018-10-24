import { mount, createLocalVue } from 'vue-test-utils'
import single from 'components/teams/single.vue'

jest.mock('axios')

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

describe('single', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(single, {
      localVue,
      propsData: {
        team: {
          created_at: '2018-02-18 09:01:46',
          description: '',
          id: 36,
          members: [
            {
              active: 1,
              avatar: 'http://goodwork.local/image/avatar.jpg',
              bio: 'Quam officia rerum libero quis aut tempore mollitia iure at aut modi id quasi harum.',
              created_at: '2018-02-18 06:18:21',
              designation: 'Frontend Developer',
              email: 'dpredovic@example.com',
              id: 133,
              name: 'Joannie Senger Sr.',
              pivot: Object,
              role: 1,
              timezone: 'Europe/Andorra',
              updated_at: '2018-02-18 06:18:21',
              username: 'pharvey'
            }
          ],
          name: 'JS Devs',
          office_id: null,
          updated_at: '2018-02-18 09:01:46'
        }
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
