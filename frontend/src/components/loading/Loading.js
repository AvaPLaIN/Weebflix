import { LoadingComponent } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingComponent>
      <div class="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
      </div>
    </LoadingComponent>
  );
};

export default Loading;
