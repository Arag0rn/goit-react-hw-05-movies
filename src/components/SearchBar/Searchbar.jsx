import {  Button, StyledForm, StyledField } from "./Searchbar.styled"
import { ReactComponent as Icon } from "./icons8-suche.svg"
import { Formik} from 'formik';
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const Searchbar = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query") ?? '';
  console.log(query);
    return <>
        
        <Formik
        initialValues={{ searchQuery: '' }}
        onSubmit={(values,  action ) => {
          const isValidInput = /^[a-zA-Z0-9\s]+$/.test(values.searchQuery);
          if (!isValidInput || values.searchQuery === "") {
          } else {
            setSearchParams({ query: values.searchQuery });
            navigate(`/movies?query=${values.searchQuery}`);
            action.resetForm();
    
          }
        }}
      >
    <StyledForm >
    <Button type="submit" className="button" >
      
      <Icon></Icon>
    </Button>

    <StyledField
      className="input"
      type="text"
      name="searchQuery"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
    />
    </StyledForm>
  </Formik>

    </>
}