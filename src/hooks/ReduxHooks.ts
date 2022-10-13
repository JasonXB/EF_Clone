import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type {
  RootState,
  AppDispatch,
} from '../../state-management/ReduxToolkit/store';

// Custom hooks that replace Redux's `useDispatch` and `useSelector` methods
// Saves time by taking care of type definitions in one place rather than several
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// source: https://redux-toolkit.js.org/tutorials/typescript#project-setup
