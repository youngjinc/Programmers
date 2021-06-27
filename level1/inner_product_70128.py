def solution(a, b):
    inner_product = 0
    for num_a, num_b in zip(a, b):
        inner_product += num_a * num_b
    
    return inner_product