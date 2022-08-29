def solution(s1, s2, n, m):
    ans = 0;
    for i in range(0, n - m + 1):
        flag = True
        for j in range(0, m):
            if s2[j] == "*":
                continue;
            if s1[i + j] != s2[j]:
                flag = False
                break;
        if flag:
            ans += 1
    return ans

s1 = "abcaaccc"
s2 = "a**c"
n = 8
m = 4

print(solution(s1, s2, n, m))


# S 是布料字符串
# arr是客户要求的长度
# strs是客户要求的字符串数组


def solution(S, arrLen, strs):
    

S = "aaaa"
arr = ["aaaa", "aa"];