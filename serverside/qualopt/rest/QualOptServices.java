package qualopt.rest;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/qualopt")
public class QualOptServices{
    @POST
    @Consumes("application/json")
    public Response createAccount(){
        return null;
    }

}



