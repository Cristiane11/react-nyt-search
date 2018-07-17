import React from "react";
import "./SearchForm.css";
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          search: "",
          breeds: [],
          results: [],
          error: ""
        };
      }
    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };

    render() {
      return(
          <div>
               <h2 className="header center">Search for an Article</h2>
             <form >
                 <div>
             <i>search</i>
           
                  <label for="topic">Topic</label>
                  <input type="text" ref="topic" id="topic" required="required" onChange={this.handleInputChange}/>

                  </div>
                  <div>
             <i>search</i>
           
                  <label for="topic">Topic</label>
                  <input type="text" ref="topic" id="topic" required="required"/>

                  </div>
                  <div>
             <i>search</i>
           
                  <label for="topic">Topic</label>
                  <input type="text" ref="topic" id="topic" required="required"/>

                  </div>
                  <div>
             <i>search</i>
           
                  <label for="topic">Topic</label>
                  <input type="text" ref="topic" id="topic" required="required"/>

                  </div>
                  <div>
           
           
                  <button></button> <button></button>

                  </div>
             </form>
            </div> 

      )
    }
};
export default SearchForm;