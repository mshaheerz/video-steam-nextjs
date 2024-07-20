import { useEffect, useState } from "react";
import { toast } from "sonner";

import { JwtPayload, jwtDecode } from "jwt-decode";
import { createViewerToken } from "@/actions/token";

export const useViewerToken = (hostIdentity: string) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [identity, setIdentity] = useState("");


  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createViewerToken(hostIdentity);
        setToken(viewerToken);
        console.log(viewerToken,"tooooooooo")

        const decodedToken = jwtDecode(viewerToken) as JwtPayload & {
          name?: string;
        };
        console.log(decodedToken,"decodedtokeb",decodedToken.jti)
        const name = decodedToken?.name;
        const identity = decodedToken.sub;

        if (identity) {
          setIdentity(identity);
        }

        if (name) {
          setName(name);
        }
      } catch {
        toast.error("Something went wrong");
      }
    };

    createToken();
  }, [hostIdentity]);
// console.log(token+"foooos",name+"name------------",identity)
  return {
    token,
    name,
    identity
  }
};
