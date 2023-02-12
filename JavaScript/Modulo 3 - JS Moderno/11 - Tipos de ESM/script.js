import { inline as linha } from "./inline.js"; //Export normal com 'alias'
import dLinha from "./inline.js" // Export default com mudança de nome(padrão)
import { group } from "./non-inline";
import exportDefault from "./non-inline.js";

linha();
dLinha();

group();
exportDefault();