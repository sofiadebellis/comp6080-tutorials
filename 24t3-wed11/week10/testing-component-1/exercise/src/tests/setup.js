// In src/tests/setup.[ts|js]
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
	cleanup();
}) 