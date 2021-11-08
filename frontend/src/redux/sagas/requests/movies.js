import { getMovies } from '../../../api/movie';

export function requestGetAllMovies(jwt) {
  return getMovies(jwt);
}
