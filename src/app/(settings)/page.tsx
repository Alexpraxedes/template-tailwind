import { SeetingsTabs } from '@/components/SeetingsTabs'
import {
  API,
  Billing,
  Email,
  Integrations,
  MyDetails,
  Notifications,
  Password,
  Plan,
  Profile,
  Team,
} from './Tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SeetingsTabs
        tabs={[
          {
            value: 'my-details',
            title: 'My details',
            content: <MyDetails />,
          },
          { value: 'profile', title: 'Profile', content: <Profile /> },
          {
            value: 'password',
            title: 'Password',
            content: <Password />,
          },
          { value: 'team', title: 'Team', content: <Team /> },
          { value: 'plan', title: 'Plan', content: <Plan /> },
          { value: 'billing', title: 'Billing', content: <Billing /> },
          { value: 'email', title: 'Email', content: <Email /> },
          {
            value: 'notifications',
            title: 'Notifications',
            content: <Notifications />,
          },
          {
            value: 'integrations',
            title: 'Integrations',
            content: <Integrations />,
          },
          { value: 'api', title: 'API', content: <API /> },
        ]}
      />
    </>
  )
}
