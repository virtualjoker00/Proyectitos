# Input: primera linea dos enteros n y Q
# Siguientes n-1 lineas: enteros u y v (establece que hay un vertice entre ellos)
# Siguientes Q lineas: queries a evaluar, u y v
# Output: YES si u es ancestro de v, sino imprimir NO

# Importante: al pegar input, oprimir enter dos veces

def main():
    # Se obtienen las líneas del input, se separan por lineas 
    lines = []
    while True:
        user_input = input()
        if user_input == '':
            break
        else:
            lines.append(user_input)

    # Se obtiene n y Q
    n, q = map(int, lines[0].split())

    # Se arma el árbol y las queries en base a la entrada
    tree = {}
    queries = []
    for i in range(1, len(lines)):
        if i < n:
            edge = lines[i].split()
            u, v = edge[0], edge[1]
            # Se agrega la relación u -> v al árbol
            if u in tree:
                tree[u].append(v)
            else:
                tree[u] = [v]
        else:
            anc = lines[i].split()
            queries.append(anc)

    # Se comprueban las queries
    for q in queries:
        u, v = q[0], q[1]
        if esAncestro(u, v, tree):
            print("YES")
        else:
            print("NO")


def esAncestro(u, v, tree):
    # Casos base
    if u == '1' or u == v:
        return True

    if u not in tree or v == '1':
        return False

    # Se comprueba si u es ancestro de v recursivamente
    for child in tree[u]:
        if esAncestro(child, v, tree):
            return True

    return False


main()
