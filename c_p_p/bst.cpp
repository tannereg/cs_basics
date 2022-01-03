/*
insert
remove
find 
bfs pre, post, in 
dfs pre, post, in 
*/
#include <iostream>
#include <stdio.h>
#include <string.h>
#include <vector>
#include <queue>
#include <stack>
#include <set>

class Node {
public:
    int val;
    Node* left;
    Node* right;
    
    Node() {}
    Node(int val) : val(val) {}
};

class Tree {
public:
    Node* root;
    
    bool insert(int val) {
        if (root == nullptr) {
            root = new Node(val);
            return root;
        }
        Node* cur = root;
        while (true) {
            if (val == cur->val) {
                std::cout << val << " already in tree" << std::endl;
                return false;
            } else if (val > cur->val) {
                if (cur->right == nullptr) {
                    cur->right = new Node(val);
                    return true;
                } else {
                    cur = cur->right;
                }
            } else {
                if (cur->left == nullptr) {
                    cur->left = new Node(val);
                    return true;
                } else {
                    cur = cur->left;
                }
            }
        }
    }
    
    Node* find(int val) {
        if (root == nullptr) {
            std::cout << "empty" << std::endl;
            return root;
        }
        Node* cur = root;
        while (true) {
            if (val == cur->val) {
                std::cout << val << " found" << std::endl;
                return cur;
            } else if (val > cur->val) {
                if (cur->right == nullptr) {
                    std::cout << val << " does not exist" << std::endl;
                    return cur->right;
                } else {
                    cur = cur->right;
                }
            } else {
                if (cur->left == nullptr) {
                    std::cout << val << " does not exist" << std::endl;
                    return cur->left;
                } else {
                    cur = cur->left;
                }
            }
        }
    }
    
    void dfs() {
        std::vector<int> myList{};
        std::stack<Node*> stack;
        std::set<Node*> visited;
        Node* cur = root;
        stack.push(cur);
        while (!stack.empty()) {
            cur = stack.top();
            if (cur->left != nullptr && visited.find(cur->left) == visited.end()) {
                stack.push(cur->left);
                continue;
            }
            if (cur->right != nullptr && visited.find(cur->right) == visited.end()) {
                stack.push(cur->right);
                continue;
            }
            if (visited.find(cur) == visited.end()) {
                myList.push_back(cur->val);
                visited.insert(cur);
            }
            stack.pop();
        }
        for (auto val : myList) {
            std::cout << val << " ";
        }
    }
    
    void dfsr() {
        std::vector<int> myList{};
        Node* cur = root;
        helperdfs(cur, myList);
        for (auto val : myList) {
            std::cout << val << " ";
        }
    }
    void helperdfs(Node* cur, std::vector<int>& myList) {
        if (cur == nullptr) {
            return;
        }
        helperdfs(cur->left, myList);
        helperdfs(cur->right, myList);
        myList.push_back(cur->val);
    }
    
    void bfs() {
        std::vector<int> myList{};
        std::queue<Node*> q;
        q.push(root);
        while(!q.empty()) {
            Node* cur = q.front();
            q.pop();
            myList.push_back(cur->val);
            if (cur->left != nullptr) {
                q.push(cur->left);
            }
            if (cur->right != nullptr) {
                q.push(cur->right);
            }
        }
        for (auto val : myList) {
            std::cout << val << " ";
        }
    }
    
    void printq(std::queue<Node*> q) {
        while (!q.empty()) {
            std::cout << q.front()->val << " ";
            q.pop();
        }
        std::cout << std::endl;
    }
    
    void printstack(std::stack<Node*> stack) {
        while (!stack.empty()) {
            std::cout << stack.top()->val << " ";
            stack.pop();
        }
        std::cout << std::endl;
    }
};

int main() {
    Tree * tree = new Tree();
    tree->insert(5);
    tree->insert(2);
    tree->insert(1);
    tree->insert(4);
    tree->insert(3);
    tree->insert(7);
    tree->insert(7);
    tree->insert(6);
    tree->insert(8);
    tree->find(50);
    tree->dfsr();
    return 0;
}
