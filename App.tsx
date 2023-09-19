import { ThemeProvider, useTheme } from 'styled-components/native'
import { Home } from './src/screens/Home'
import { theme } from './src/theme/theme'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './src/lib/react-query'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView
            edges={['right', 'top', 'left']}
            style={{ flex: 1, backgroundColor: '#75DAFE' }}
          >
            <Home />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
