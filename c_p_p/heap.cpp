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
using namespace std;
class HeapMin {
public:
    vector<int> heap;
    
    void insert(int val) {
        heap.push_back(val);
        int index = heap.size()-1;
        while (index > 0) {
            int indexParent = (index-1)/2;
            if (val >= heap.at(indexParent)) break;
            iter_swap(next(heap.begin(), indexParent), next(heap.begin(), index));
            index = indexParent;
        }
    }
    
    void deleteVal(int val) {
        int index = find(val);
        if (index == heap.size()) cout << "not found" << endl;
        else {
            print();
            iter_swap(next(heap.begin(), index), next(heap.begin(), heap.size()-1));
            print();
            heap.pop_back();
            print();
            delHelper(index);
            print();
        }
    }
    
    void delHelper(int index) {
        int result;
        if (2*index + 1 >= heap.size()) return;
        else if (2*index + 2 >= heap.size()) {
            result = heap.at(2*index+1);
        }
        else {
            result = heap.at(2*index+1) <= heap.at(2*index+2) ? 2*index+1 : 2*index+2;
        }
        if (heap.at(result) < heap.at(index)) {
            iter_swap(next(heap.begin(), index), next(heap.begin(), result));
            delHelper(result);
        }
        return;
    }
    
    int find(int val, int index = 0) {
        if (index >= heap.size() || val < heap.at(index)) return heap.size();
        if (val == heap.at(index)) return index;
        index = 2*index + 1;
        int result = find(val, index);
        int result2 = find(val, index + 1);
        return result < result2 ? result : result2;
    }
    
    void print() {
        for (auto val : heap) {
            cout << val << " ";
        }
        cout << endl;
    }
};

class HeapMax {
public:
    vector<int> heap;
    
    void insert(int val) {
        heap.push_back(val);
        int index = heap.size()-1;
        while (index > 0) {
            int indexParent = (index-1)/2;
            if (val <= heap.at(indexParent)) break;
            iter_swap(next(heap.begin(), indexParent), next(heap.begin(), index));
            index = indexParent;
        }
    }
    
    void deleteVal(int val) {
        int index = find(val);
        if (index == heap.size()) cout << "not found" << endl;
        else {
            print();
            iter_swap(next(heap.begin(), index), next(heap.begin(), heap.size()-1));
            print();
            heap.pop_back();
            print();
            delHelper(index);
            print();
        }
    }
    
    void delHelper(int index) {
        int result;
        print();
        if (2*index + 1 >= heap.size()) return;
        else if (2*index + 2 >= heap.size()) {
            result = 2*index+1;
        }
        else {
            result = heap.at(2*index+1) >= heap.at(2*index+2) ? 2*index+1 : 2*index+2;
        }
        if (heap.at(result) > heap.at(index)) {
            iter_swap(next(heap.begin(), index), next(heap.begin(), result));
            delHelper(result);
        }
        return;
    }
    
    int find(int val, int index = 0) {
        if (index >= heap.size() || val > heap.at(index)) return heap.size();
        if (val == heap.at(index)) return index;
        index = 2*index + 1;
        int result = find(val, index);
        int result2 = find(val, index + 1);
        return result < result2 ? result : result2;
    }
    
    void print() {
        for (auto val : heap) {
            cout << val << " ";
        }
        cout << endl;
    }
};

int main() {
    HeapMin h = HeapMin();
    h.insert(5);
    h.insert(10);
    h.insert(33);
    h.insert(19);
    h.insert(17);
    h.insert(25);
    h.insert(45);
    h.deleteVal(5);
    h.print();
    return 0;
}
