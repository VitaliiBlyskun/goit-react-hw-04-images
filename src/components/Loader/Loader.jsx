import { Grid } from 'react-loader-spinner';
import '../../styles.css';

export default function Loader() {
  return (
    <div className="Loader-style">
        <Grid
          height="100"
          width="100"
          color="#223ad6"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />

    </div>
  );
}

