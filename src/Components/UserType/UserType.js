import user from "../../Model/User";
import useModelProp from '../../Model/UseModelProp';

/**
 * UserType component used to determine if the user is a recruiter or applicant.
 *
 * @param {String} value recruiter or applicant. Determines that children should be
 *                        rendered depending on if the user is a recruiter or applicant. If
 *                        value matches type, then render children.
 * @param {JSX objects} children JSX objects to be rendered if type
 *                               is same as the value argument.
 */
function UserType({value,children}){
    const type=useModelProp(user,"type");
    return type===value?children:false;
}

export {UserType};
