import { mount } from 'vue-test-utils'
import single from 'components/teams/single.vue'

describe('single', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(single, {
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
