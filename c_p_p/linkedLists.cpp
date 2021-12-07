#include <iostream>

class Node
{
public:
    int val;
    Node *next;
    Node(int val) : val(val), next(nullptr) {}
};

class SingleLinkedList
{
private:
    Node *head;
    Node *tail;
    int length = 0;

public:
    bool push(int val)
    {
        if (head == nullptr)
        {
            head = new Node(val);
            tail = head;
            length++;
            return true;
        }
        Node *temp = new Node(val);
        tail->next = temp;
        tail = tail->next;
        length++;
        return true;
    }

    int pop()
    {
        if (head == nullptr)
        {
            std::cout << "empty" << std::endl;
            return 0;
        }
        if (head->next == nullptr)
        {
            int val = head->val;
            Node *temp = head;
            head = nullptr;
            delete temp;
            length--;
            return val;
        }
        Node *cur = head;
        while (cur->next->next != nullptr)
        {
            cur = cur->next;
        }
        int val = cur->next->val;
        Node *temp = cur->next;
        cur->next = nullptr;
        delete temp;
        length--;
        return val;
    }

    bool unshift(int val)
    {
        if (head == nullptr)
        {
            push(val);
            return true;
        }
        Node *temp = new Node(val);
        temp->next = head;
        head = temp;
        length++;
        if (head == tail)
            tail = tail->next;
        return true;
    }

    int shift()
    {
        if (head == nullptr)
        {
            std::cout << "empty" << std::endl;
            return 0;
        }
        Node *temp = head;
        int val = head->val;
        head = head->next;
        delete temp;
        length--;
        return val;
    }

    Node *get(int index)
    {
        if (index >= length || index < 0)
        {
            std::cout << "Out of bounds" << std::endl;
            return nullptr;
        }
        else if (index == length - 1)
        {
            return tail;
        }
        else if (index == 0)
        {
            return head;
        }
        Node *cur = head;
        for (int i{0}; i < length; i++)
        {
            if (i == index)
            {
                return cur;
            }
            cur = cur->next;
        }
        std::cout << "should never get here" << std::endl;
        return nullptr;
    }

    int take(int index)
    {
        if (index >= length || index < 0)
        {
            std::cout << "Out of bounds" << std::endl;
            return 0;
        }
        else if (index == length - 1)
        {
            pop();
        }
        else if (index == 0)
        {
            shift();
        }
        Node *cur = get(index - 1);
        int val = cur->next->val;
        Node *temp = cur->next;
        cur->next = cur->next->next;
        delete temp;
        return val;
    }
    void set(int index, int val)
    {
        if (index >= length || index < 0)
        {
            std::cout << "Out of bounds" << std::endl;
        }
        else if (index == length - 1)
        {
            tail->val = val;
        }
        else if (index == 0)
        {
            head->val = val;
        }
        get(index)->val = val;
    }
    bool insert(int index, int val)
    {
        if (index >= length || index < 0)
        {
            std::cout << "Out of bounds" << std::endl;
        }
        else if (index == length - 1)
        {
            return push(val);
        }
        else if (index == 0)
        {
            return unshift(val);
        }
        Node *cur = get(index - 1);
        Node *temp = new Node(val);
        temp->next = cur->next;
        cur->next = temp;
        return true;
    }

    bool reverse()
    {
        tail = head;
        Node *temp = head->next;
        Node *next = temp;
        head->next = nullptr;
        while (temp != nullptr)
        {
            next = next->next;
            temp->next = head;
            head = temp;
            temp = next;
        }
        delete temp, next;
        return true;
    }

    void print()
    {
        Node *cur = head;
        std::cout << "Print: Size = " << length << std::endl;
        while (cur != nullptr)
        {
            std::cout << cur->val << std::endl;
            cur = cur->next;
        }
    }
};